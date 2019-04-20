import { Injectable } from '@angular/core';
import {
  AlimentationBubble,
  AlimentationDataModel,
  AlimentationEntry,
  AlimType,
  BringsByUser
} from '../../../../../shared/models/bubbles/AlimentationBubble';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';


@Injectable()
export class AlimentationDataService {

  user: User;

  readonly DISABLED_BUTTON: string = 'addAndDeleteUnavailable';
  readonly ENABLED_BUTTON: string = 'addAndDelete';

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  populateAlimentationDataModel(alimentationDataModel: AlimentationDataModel, alimentationEntry: AlimentationEntry) {
    alimentationDataModel.progressWidth = this.getBarWidth(alimentationEntry);
    alimentationDataModel.deleteBringButtonClass = this.getClassForDeleteBring(alimentationEntry);
    alimentationDataModel.ratio = this.getRatio(alimentationEntry);
    this.updateBringsByUser(alimentationDataModel, alimentationEntry);
  }

  getRatio(alimentationEntry: AlimentationEntry): string {
    return alimentationEntry.currentBringing +
      '/' + alimentationEntry.totalRequested;
  }

  getBarWidth(alimentationEntry: AlimentationEntry): string {
    return Math.floor(alimentationEntry.currentBringing / alimentationEntry.totalRequested * 100) + '%';
  }

  updateBringsByUser(alimentationDataModel: AlimentationDataModel, alimentationEntry: AlimentationEntry) {
    if (!alimentationDataModel.bringingsByUsers) {
      alimentationDataModel.bringingsByUsers = this.getBringsByUser(alimentationEntry);
    } else {
      this.mergeArrays(alimentationDataModel.bringingsByUsers, this.getBringsByUser(alimentationEntry));
    }
  }

  mergeArrays(old: BringsByUser[], updated: BringsByUser[]) {
    for (const updatedBring of updated) {
      let bringIsOldBrings = false;
      for (const oldBring of old) {
        if (updatedBring.id === oldBring.id) {
          // we do not care about user profile changes
          if (updatedBring.quantity !== oldBring.quantity) {
            oldBring.quantity = updatedBring.quantity;
          }
          bringIsOldBrings = true;
        }
      }
      if (!bringIsOldBrings) {
        old.push(updatedBring);
      }
    }

    for (const oldBring of old) {
      const indexOldBrings = updated.find(bring => bring.id === oldBring.id);
      if (!indexOldBrings) {
        old.splice(old.findIndex(bring => bring.id === oldBring.id), 1);
      }
    }
  }

  getBringsByUser(alimentationEntry: AlimentationEntry): BringsByUser[] {
    const bringsByUsers: BringsByUser[] = [];
    alimentationEntry.brings.map(bring => bringsByUsers.push({
      id: bring.id,
      user: this.httpService.getUser(bring.userRef),
      quantity: bring.quantity
    }));
    return bringsByUsers;
  }

  getClassForDeleteBring(alimentationEntry: AlimentationEntry): string {
    if (alimentationEntry.brings.find(bring => bring.userRef === this.user.ref)) {
      return this.ENABLED_BUTTON;
    }
    return this.DISABLED_BUTTON;
  }

  public getUserActivity(alimentationBubble: AlimentationBubble): string[] {
    const users: string[][] = alimentationBubble.entries.map(e => e.brings.map(b => b.userRef));
    if (users.length === 0) {
      return [];
    }
    return users.reduce((current, next) => current.concat(next));
  }

  public getTypeCompletion(alimentationBubble: AlimentationBubble, type: AlimType): number {
    const typeEntries = alimentationBubble.entries.filter(e => e.type === type);
    let totalRequested = 0;
    let totalBrought = 0;
    typeEntries.forEach(entry => {
      totalRequested += entry.totalRequested;
      totalBrought += entry.currentBringing;
    });

    if (totalRequested === 0) {
      return 0;
    }
    return (totalBrought / totalRequested) * 100;
  }

  public getTypeRemaining(alimentationBubble: AlimentationBubble, type: AlimType): number {
    const typeEntries = alimentationBubble.entries.filter(e => e.type === type);
    return typeEntries.filter(e => e.currentBringing !== e.totalRequested).length;
  }
}

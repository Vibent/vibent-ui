import { Injectable } from '@angular/core';
import {
  AlimentationDataModel,
  AlimentationEntry, BringsByUser
} from '../../../../../shared/models/bubbles/AlimentationBubble';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';
import 'rxjs/add/observable/of';

@Injectable()
export class AlimentationDataService {

  user: User;
  alimentationEntry: AlimentationEntry;

  readonly DISABLED_BUTTON: string = 'addAndDeleteUnavailable';
  readonly ENABLED_BUTTON: string = 'addAndDelete';

  constructor(private userManagementService: UserManagementService,
              private httpService: HttpService) {
    this.user = this.userManagementService.getMe();
  }

  constructAlimentationDataModel(alimentationDataModel: AlimentationDataModel, alimentationEntry: AlimentationEntry) {
    this.alimentationEntry = alimentationEntry;
    alimentationDataModel.progressWidth = this.getBarWidth();
    alimentationDataModel.deleteBringButtonClass = this.getClassForDeleteBring();
    alimentationDataModel.ratio = this.getRatio();
    this.updateBringsByUser(alimentationDataModel, alimentationEntry);
  }

  private getRatio(): string {
    return this.alimentationEntry.currentBringing +
      '/' + this.alimentationEntry.totalRequested;
  }

  private getBarWidth(): string {
    return Math.floor(this.alimentationEntry.currentBringing / this.alimentationEntry.totalRequested * 100) + '%';
  }

  updateBringsByUser(alimentationDataModel: AlimentationDataModel, alimentationEntry: AlimentationEntry) {
    if (!alimentationDataModel.bringingsByUsers) {
      alimentationDataModel.bringingsByUsers = this.getBringsByUser();
    }
    else {
      this.mergeArrays(alimentationDataModel.bringingsByUsers, this.getBringsByUser());
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

  private getBringsByUser(): BringsByUser[] {
    const bringsByUsers: BringsByUser[] = [];
    this.alimentationEntry.brings.map(bring => bringsByUsers.push({
      id: bring.id,
      user: this.httpService.getUser(bring.userRef),
      quantity: bring.quantity
    }));
    return bringsByUsers;
  }

  private getClassForDeleteBring(): string {
    if (this.alimentationEntry.brings.find(bring => bring.userRef === this.user.ref)) {
      return this.ENABLED_BUTTON;
    }
    return this.DISABLED_BUTTON;
  }
}
import { Injectable } from '@angular/core';
import {
  AlimentationDataModel,
  AlimentationEntry, BringsByUser
} from '../../../../../shared/models/bubbles/AlimentationBubble';
import { UserManagementService } from '../../../user-management.service';
import { User } from '../../../../../shared/models/user';
import { HttpService } from '../../../../http/http.service';

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

  constructAlimentationDataModel(alimentationEntry: AlimentationEntry): AlimentationDataModel {
    this.alimentationEntry = alimentationEntry;
    return {
      ratio: this.getRatio(),
      bringingsByUsers: this.getBringsByUser(),
      progressWidth: this.getBarWidth(),
      deleteBringButtonClass: this.getClassForDeleteBring()
    };
  }

  private getRatio(): string {
    return this.alimentationEntry.currentBringing +
      '/' + this.alimentationEntry.totalRequested;
  }

  private getBarWidth(): string {
    return Math.floor(this.alimentationEntry.currentBringing / this.alimentationEntry.totalRequested * 100) + '%';
  }

  private getBringsByUser(): BringsByUser[] {
    const bringsByUsers: BringsByUser[] = [];
    this.alimentationEntry.brings.map(bring => bringsByUsers.push({
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
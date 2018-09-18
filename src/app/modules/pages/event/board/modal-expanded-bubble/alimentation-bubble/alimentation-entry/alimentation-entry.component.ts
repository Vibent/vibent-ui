import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AlimentationBubble,
  AlimentationDataModel,
  AlimentationEntry,
  AlimType
} from '../../../../../../../shared/models/bubbles/AlimentationBubble';
import { AlimentationHttpService } from '../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { EventUpdateService } from '../../../../../../../core/services/bubbles-services/event-update.service';
import { User } from '../../../../../../../shared/models/user';
import {
  AlimentationDataService
} from '../../../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';
import Swal from 'sweetalert2';
import { UserManagementService } from '../../../../../../../core/services/user-management.service';

@Component({
  selector: 'alimentation-entry',
  templateUrl: './alimentation-entry.html'
})
export class AlimentationEntryComponent implements OnInit {

  AlimType = AlimType;

  @Input()
  alimentationEntry: AlimentationEntry;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedAlimentationBubble = new EventEmitter<AlimentationBubble>();
  user: User;
  alimentationDataModel: AlimentationDataModel;

  constructor(private alimentationHttpService: AlimentationHttpService,
              private alimentationDataService: AlimentationDataService,
              private eventUpdateService: EventUpdateService,
              private userManagementService: UserManagementService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    this.constructAlimentationDataModel();
    console.log(this.alimentationDataModel);
    this.alimentationDataModel.bringingsByUsers.push({userName: 'dd', quantity: 5});
  }

  constructAlimentationDataModel() {
    this.alimentationDataModel = this.alimentationDataService.constructAlimentationDataModel(this.alimentationEntry);
  }

  deleteEntry(): void {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.alimentationHttpService.deleteEntry(this.alimentationEntry).subscribe(() => {
          this.getAndEmitBubble();
          this.eventUpdateService.updateEvent(this.eventRef);
        });
      }
    });
  }

  addBring(): void {
    this.alimentationEntry.currentBringing++;
    const bring = this.alimentationEntry.brings.find(bring => bring.userRef === this.user.ref);
    if (bring) {
      bring.quantity++;
    }
    else {
      this.alimentationEntry.brings.push({
        userRef: this.user.ref,
        quantity: 1
      });
    }
    this.constructAlimentationDataModel();
    this.alimentationHttpService.changeBring({
      entryId: this.alimentationEntry.id,
      quantity: 1
    }).subscribe(() => {
      this.eventUpdateService.updateEvent(this.eventRef);
    });
  }

  deleteBring(): void {
    const bring = this.alimentationEntry.brings.find(bring => bring.userRef === this.user.ref);
    if (bring) {
      this.alimentationEntry.currentBringing--;
      if (bring.quantity > 1) {
        bring.quantity--;
      }
      else {
        this.alimentationEntry.brings
          .splice(this.alimentationEntry.brings
            .findIndex(bring => bring.userRef === this.user.ref), 1);
      }
      this.constructAlimentationDataModel();
      this.alimentationHttpService.changeBring({
        entryId: this.alimentationEntry.id,
        quantity: -1
      }).subscribe(() => {
        this.eventUpdateService.updateEvent(this.eventRef);
      });
    }
  }

  getAndEmitBubble(): void {
    this.alimentationHttpService.getBubble(this.bubbleId).subscribe((updatedBubble) => {
      this.updatedAlimentationBubble.emit(<AlimentationBubble>updatedBubble);
    });
  }


}

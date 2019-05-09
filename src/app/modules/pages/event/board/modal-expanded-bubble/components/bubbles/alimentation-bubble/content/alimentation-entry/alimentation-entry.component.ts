import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AlimentationBubble,
  AlimentationDataModel,
  AlimentationEntry,
  AlimType
} from '../../../../../../../../../../shared/models/bubbles/AlimentationBubble';
import { AlimentationHttpService } from '../../../../../../../../../../core/services/bubbles-services/alimentation/http/alimentation-http.service';
import { EventUpdateService } from '../../../../../../../../../../core/services/bubbles-services/event-update.service';
import { User } from '../../../../../../../../../../shared/models/user';
import { AlimentationDataService } from '../../../../../../../../../../core/services/bubbles-services/alimentation/data/alimentation-data.service';
import Swal from 'sweetalert2';
import { UserManagementService } from '../../../../../../../../../../core/services/user-management.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MessageService } from '../../../../../../../../../../core/services/i18n/message.service';
import { BubbleType } from '../../../../../../../../../../shared/models/bubbles/IBubble';

declare const $: any;

@Component({
  selector: 'alimentation-entry',
  templateUrl: './alimentation-entry.html',
  animations: [
    trigger('fadeInOut', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlimentationEntryComponent implements OnInit {

  @Input()
  alimentationEntry: AlimentationEntry;
  @Input()
  bubbleId: number;
  @Input()
  eventRef: string;
  @Output()
  updatedAlimentationBubble = new EventEmitter<AlimentationBubble>();
  user: User;
  alimentationDataModel: AlimentationDataModel = new AlimentationDataModel();

  AlimType = AlimType;

  constructor(private alimentationHttpService: AlimentationHttpService,
              private alimentationDataService: AlimentationDataService,
              private eventUpdateService: EventUpdateService,
              private userManagementService: UserManagementService,
              private messageService: MessageService) {
    this.user = this.userManagementService.getMe();
  }

  ngOnInit(): void {
    this.constructAlimentationDataModel();
    $(() => {
      $('.tooltip-activation').tooltip();
    });
  }

  constructAlimentationDataModel() {
    this.alimentationDataService.populateAlimentationDataModel(this.alimentationDataModel, this.alimentationEntry);
  }

  deleteEntry(): void {
    Swal({
      title: this.messageService.ARE_YOU_SURE,
      text: this.messageService.NO_REVERT,
      type: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: this.messageService.CONFIRM_BUTTON_COLOR,
      cancelButtonColor: this.messageService.CANCEL_BUTTON_COLOR,
      confirmButtonText: this.messageService.DELETE
    }).then((result) => {
      if (result.value) {
        this.alimentationHttpService.deleteEntry(this.alimentationEntry).subscribe(() => {
          this.getAndEmitBubble();
          this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.AlimentationBubble});
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
      this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.AlimentationBubble});
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
        this.eventUpdateService.updateEvent(this.eventRef, {id: this.bubbleId, type: BubbleType.AlimentationBubble});
      });
    }
  }

  getAndEmitBubble(): void {
    this.alimentationHttpService.getBubble(this.bubbleId).subscribe((updatedBubble) => {
      this.updatedAlimentationBubble.emit(<AlimentationBubble>updatedBubble);
    });
  }


}

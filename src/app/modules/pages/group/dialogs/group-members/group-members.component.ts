import { Component, Input } from '@angular/core';
import { Group } from '../../../../../shared/models/group';

declare const $: any;

@Component({
  selector: 'group-members',
  templateUrl: './group-members.component.html'
})
export class GroupMembersComponent {

  @Input()
  group: Group;

  constructor() {
  }

  close() {
    $('#modalGroupMembers').modal('hide');
  }
}

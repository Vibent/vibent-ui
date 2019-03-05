import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material';

declare const $: any;

@Component({
  selector: 'group-admin-panel',
  templateUrl: './group-admin-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupAdminPanelComponent  {

  constructor(public dialog: MatDialog) {
  }

  openSettingsDialog(): void {
    $('#modalGroupSettings').modal('show');
  }

}

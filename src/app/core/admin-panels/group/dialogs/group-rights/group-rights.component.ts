import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from '../../../../../shared/models/group';
import { GroupAdminPanelService } from '../../../../services/group-admin-panel.service';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-rights.component.html'
})
export class GroupRightsComponent implements OnInit {

  public group: Group;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupRightsComponent>,
              private router: Router,
              private adminPanelService: GroupAdminPanelService,
              @Inject(MAT_DIALOG_DATA) data) {

    this.group = data.group;
    dialogRef.disableClose = true;
    const dialogHeight = window.innerHeight <= 700 ? window.innerHeight - 50 + 'px' : '700px';
    dialogRef.updateSize('600px', dialogHeight);
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.group.name, []],
      description: [this.group.description, []],
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public updateInfo(): void {
    this.dialogRef.close();
  }

}

import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpService} from '../../../http/http.service';
import {Router} from '@angular/router';
import {Group} from '../../../models/group';
import {AdminPanelService} from '../../../services/admin-panel.service';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.css']
})
export class GroupSettingsComponent implements OnInit {

  group: Group;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupSettingsComponent>,
              private router: Router,
              private adminPanelService: AdminPanelService,
              @Inject(MAT_DIALOG_DATA) data) {

    this.group = data.group;
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '65%');
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.group.name, []],
      description: [this.group.description, []],
    });
  }

  public close() {
    this.dialogRef.close();
  }

  public updateInfo() {
    this.dialogRef.close(this.form.value);
    this.group.name = this.form.value.name;
    this.group.description = this.form.value.description;
    const group = {
      ref: this.group.ref,
      name: this.group.name,
      description: this.group.description,
    };
    this.adminPanelService.updateGroup(group);

  }

}

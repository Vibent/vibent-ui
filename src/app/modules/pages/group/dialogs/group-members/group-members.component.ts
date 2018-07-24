import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../../../../shared/models/group';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-members.component.html'
})
export class GroupMembersComponent implements OnInit {

  public form: FormGroup;
  public group: Group;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupMembersComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

    const dialogHeight = window.innerHeight <= 700 ? window.innerHeight - 50 + 'px' : '700px';
    dialogRef.updateSize('600px', dialogHeight);
    this.group = data.group;
  }

  ngOnInit() {
  }
}

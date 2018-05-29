import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {GroupPreviewMember} from '../../models/group-preview-member';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.css']
})
export class GroupMembersComponent implements OnInit {

  public form: FormGroup;
  public groupMembers: GroupPreviewMember[];

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupMembersComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    dialogRef.updateSize('600px', '80%');
    this.groupMembers = data.groupMembers;
  }

  ngOnInit() {
  }
}

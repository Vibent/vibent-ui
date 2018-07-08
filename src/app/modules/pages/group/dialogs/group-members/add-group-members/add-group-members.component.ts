import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-creation',
  templateUrl: './add-group-members.component.html'
})
export class AddGroupMembersComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddGroupMembersComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    dialogRef.updateSize('600px', '500px');
  }

  ngOnInit() {
  }

  public generateLink(): void {
  }

  public sendInvitation(): void {
  }
}
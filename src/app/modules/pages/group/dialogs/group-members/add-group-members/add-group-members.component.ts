import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../../../../../core/http/http.service';
import { Group } from '../../../../../../shared/models/group';

@Component({
  selector: 'app-group-creation',
  templateUrl: './add-group-members.component.html'
})
export class AddGroupMembersComponent implements OnInit {

  public group: Group;
  public form: FormGroup;
  public generatedLink: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddGroupMembersComponent>,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.group = data.group;
    dialogRef.updateSize('600px', '500px');
  }

  ngOnInit() {
  }

  public generateLink(): void {
    this.httpService.getInviteToken(this.group.ref).subscribe((link) => {
      this.generatedLink = link.token;
    });

  }

  public sendInvitation(): void {
  }
}

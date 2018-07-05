import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from '../../../../../shared/models/group';
import { AdminPanelService } from '../../../../services/admin-panel.service';
import Swal from 'sweetalert2';
import { HttpService } from '../../../../http/http.service';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html'
})
export class GroupSettingsComponent implements OnInit {

  public group: Group;
  public form: FormGroup;
  public name: FormControl;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupSettingsComponent>,
              private router: Router,
              private adminPanelService: AdminPanelService,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data) {

    this.group = data.group;
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '90%');
  }

  ngOnInit() {
    this.name = new FormControl(this.group.name, [
      Validators.required
    ]);
    this.form = this.fb.group({
      name: this.name,
      description: new FormControl(this.group.description),
    });
  }

  public removeGroup(): void {
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
        this.dialogRef.close();
        this.httpService.deleteGroup(this.group.ref).subscribe();
        Swal(
          'Deleted!',
          'Group ' + this.group.name + ' has been deleted',
          'success'
        ).then((result) => {
          this.router.navigate(['/groups']); });
      }
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public updateInfo(): void {
    this.dialogRef.close(this.form.value);
    this.group.name = this.form.value.name;
    this.form.value.description === '' ? this.group.description = null : this.group.description = this.form.value.description;
    const group = {
      ref: this.group.ref,
      name: this.group.name,
      description: this.group.description,
    };
    console.log(group);
    this.adminPanelService.updateGroup(group);

  }

}

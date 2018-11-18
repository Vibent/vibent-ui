import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../../../core/http/http.service';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { Messages } from '../../../../../shared/messages-codes/messages';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html'
})
export class GroupCreationComponent implements OnInit {

  form: FormGroup;
  title: FormControl;
  description: FormControl;
  titleValidSetted = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupCreationComponent>,
              private loaderService: LoaderService,
              private notificationService: NotificationsService,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data,
              private router: Router) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl();
    this.form = this.fb.group({
      title: this.title,
      description: this.description
    });
  }

  public saveGroup(): void {
    this.close();
    this.loaderService.displayLoadingPageModal();
    this.titleValidSetted = this.title.valid;
    let description: string;
    this.form.value.description === '' ? description = null : description = this.form.value.description;
    const group = {
      name: this.title.value,
      description: description,
      allAdmins: true
    };
    this.httpService.createGroup(group).subscribe(res => {
      this.loaderService.closeLoadingPageModal();
      this.router.navigate(['/groups/' + res['ref']]);
      this.notificationService.notify(Messages.GROUP_CREATED, NotificationType.SUCCESS)
    });

  }

  close() {
    this.dialogRef.close();
  }
}


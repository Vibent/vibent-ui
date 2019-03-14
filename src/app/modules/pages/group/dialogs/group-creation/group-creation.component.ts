import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../../../../../core/http/http.service';
import { NotificationsService, NotificationType } from '../../../../../core/services/notifications.service';
import { LoaderService } from '../../../../../core/services/loader/service/loader.service';
import { MessageService } from '../../../../../core/services/i18n/message.service';

declare const $: any;

@Component({
  selector: 'modal-group-creation',
  templateUrl: './group-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupCreationComponent implements OnInit {

  form: FormGroup;
  title: FormControl;
  description: FormControl;
  titleValidSetted = true;

  constructor(private fb: FormBuilder,
              private loaderService: LoaderService,
              private notificationService: NotificationsService,
              private httpService: HttpService,
              private router: Router,
              private messageService: MessageService) {
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
    this.titleValidSetted = this.title.valid;
    let description: string;
    this.form.value.description === '' ? description = null : description = this.form.value.description;
    const group = {
      name: this.title.value,
      description: description,
      allAdmins: true
    };
    if (this.titleValidSetted) {
      this.loaderService.displayLoadingPageModal();
      this.httpService.createGroup(group).subscribe(res => {
        this.close();
        this.loaderService.closeLoadingPageModal();
        this.router.navigate(['/groups/' + res['ref']]);
        this.notificationService.notify(this.messageService.GROUP_CREATED, NotificationType.SUCCESS);
      }, () => {
        this.loaderService.closeLoadingPageModal();
      });
    }
  }

  close() {
    $('#modalGroupCreation').modal('hide');
  }
}


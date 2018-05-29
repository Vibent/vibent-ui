import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpSentEvent} from '@angular/common/http';
import {HttpService} from '../../http/http.service';
import {Group} from '../../models/group';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent implements OnInit {
  public title: string;
  public description: string;
  public group: string;
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupCreationComponent>,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data,
              private router: Router) {
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '80%');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, []],
      description: [this.description, []]
    });
  }

  public saveGroup(): void {
    this.dialogRef.close(this.form.value);
    const group = {
      name: this.form.value.title,
      description: this.form.value.description,
      allAdmins: true
    };
    this.httpService.createGroup(group).subscribe(res => {
      this.router.navigate(['/groups/' + res['ref']]);
    });

  }
}


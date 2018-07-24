import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../../../core/http/http.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html'
})
export class GroupCreationComponent implements OnInit {

  public form: FormGroup;
  public title: FormControl;
  public description: FormControl;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupCreationComponent>,
              private httpService: HttpService,
              @Inject(MAT_DIALOG_DATA) data,
              private router: Router) {
    dialogRef.disableClose = true;
    const dialogHeight = window.innerHeight <= 700 ? window.innerHeight - 50 + 'px' : '700px';
    dialogRef.updateSize('600px', dialogHeight);
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
    this.dialogRef.close(this.form.value);
    let description: string;
    this.form.value.description === '' ? description = null : description = this.form.value.description;
    const group = {
      name: this.form.value.title,
      description: description,
      allAdmins: true
    };
    console.log(group);
    this.httpService.createGroup(group).subscribe(res => {
      this.router.navigate(['/groups/' + res['ref']]);
    });

  }
}


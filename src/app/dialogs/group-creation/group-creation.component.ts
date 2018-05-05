import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent implements OnInit {
  title: string;
  description: string;
  group: string;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<GroupCreationComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    dialogRef.disableClose = true;
    dialogRef.updateSize('600px', '80%');
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.title, []],
      description: [this.description, []]
    });
  }

  saveGroup() {
    this.dialogRef.close(this.form.value);
  }

}

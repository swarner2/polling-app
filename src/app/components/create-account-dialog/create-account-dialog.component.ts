import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.scss']
})
export class CreateAccountDialogComponent {
  avatarUrls = [
    '/assets/avatar1.jpg',
    '/assets/avatar2.jpg',
    '/assets/avatar3.jpg',
    '/assets/avatar4.jpg',
    '/assets/avatar5.jpg',
  ]

  constructor(
    public dialogRef: MatDialogRef<CreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

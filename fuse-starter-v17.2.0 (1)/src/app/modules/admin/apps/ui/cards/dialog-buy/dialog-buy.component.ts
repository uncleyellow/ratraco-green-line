import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-buy.component.html',
  styleUrls: ['./dialog-buy.component.scss']
})
export class DialogComponent {
  quantity: number = 1; // Giá trị mặc định

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(result: boolean) {
    this.dialogRef.close({ confirmed: result, quantity: this.quantity });
  }
}

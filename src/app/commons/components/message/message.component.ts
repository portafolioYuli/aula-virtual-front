import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageData } from '../../interfaces/message-data';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageData
  ) {}

  ngOnInit() {}

  ok(): void {
    this.dialog.close();
  }
}

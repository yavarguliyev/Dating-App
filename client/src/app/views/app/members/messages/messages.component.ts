import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/shared/models/message';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: IMessage[];
  @Input() username: string;
  messageContent: string;
  loading = false;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage() {
    this.loading = true;
    this.messageService
      .sendMessage(this.username, this.messageContent)
      .then(() => {
        this.messageForm.reset();
      })
      .finally(() => (this.loading = false));
  }
}

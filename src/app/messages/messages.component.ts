import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // service must be public because we are going to bind it to the template
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}

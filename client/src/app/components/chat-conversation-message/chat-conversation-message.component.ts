import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-conversation-message',
  templateUrl: './chat-conversation-message.component.html',
  styleUrls: ['./chat-conversation-message.component.scss']
})
export class ChatConversationMessageComponent implements OnInit {

  @Input() text: string;
  @Input() from: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

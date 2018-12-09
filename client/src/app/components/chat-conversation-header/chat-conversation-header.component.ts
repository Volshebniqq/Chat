import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-conversation-header',
  templateUrl: './chat-conversation-header.component.html',
  styleUrls: ['./chat-conversation-header.component.scss']
})
export class ChatConversationHeaderComponent implements OnInit {

  @Input() avatar: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

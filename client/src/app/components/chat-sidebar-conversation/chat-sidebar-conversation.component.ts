import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar-conversation',
  templateUrl: './chat-sidebar-conversation.component.html',
  styleUrls: ['./chat-sidebar-conversation.component.scss']
})
export class ChatSidebarConversationComponent implements OnInit {

  @Input() name: String;
  @Input() status: String;
  @Input() avatar: String;
  @Input() active: Boolean;

  constructor() { }

  ngOnInit() {
  }

}

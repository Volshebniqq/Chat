import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.scss']
})
export class ChatConversationComponent implements OnInit {

  private conversation: object;

  constructor(private _chatService: ChatService) {
    this._chatService.getActiveConversation()
      .subscribe(data => {
        this.conversation = data;
        console.log(this.conversation);
      });
  }

  ngOnInit() {
  }

}

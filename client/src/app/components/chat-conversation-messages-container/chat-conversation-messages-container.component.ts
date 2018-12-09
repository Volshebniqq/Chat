import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-conversation-messages-container',
  templateUrl: './chat-conversation-messages-container.component.html',
  styleUrls: ['./chat-conversation-messages-container.component.scss']
})
export class ChatConversationMessagesContainerComponent implements OnInit {

  private messages: Array;
  private displayedMessages: Array;

  @Input() id: string;
  @Input() name: string;

  constructor(private _chatService: ChatService) {
    this._chatService.messagesList()
      .subscribe(data => {
        this.messages = data;
        this.updateDisplayedMessages();
        console.log(this.messages);
      });

    this._chatService.newMessage()
      .subscribe(data => {
        this.messages.push(data);
        this.updateDisplayedMessages();
      });
  }

  ngOnInit() {
  }

  updateDisplayedMessages() {
    this.displayedMessages = this.messages.filter(item => {
      return item.from === this.id || item.to === this.id;
    });
  }

}

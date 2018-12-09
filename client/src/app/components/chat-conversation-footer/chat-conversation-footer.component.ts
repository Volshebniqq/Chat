import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-conversation-footer',
  templateUrl: './chat-conversation-footer.component.html',
  styleUrls: ['./chat-conversation-footer.component.scss']
})
export class ChatConversationFooterComponent implements OnInit {

  private message = '';
  private isTyping = false
  private tm: any;

  @Input() connection_id: string;
  @Input() name: string;

  constructor(private _chatService: ChatService) {
    this._chatService.getTyping()
      .subscribe(data => {
        console.log(data);
        if (data.from === this.connection_id) {
          clearTimeout(this.tm);
          this.isTyping = true;
          this.tm = setTimeout(() => {
            this.isTyping = false;
          }, 3000);
        }
      });
  }

  ngOnInit() {
  }

  send(e) {
    e.preventDefault();
    this._chatService.sendMessage({
      to: this.connection_id,
      message: this.message
    });
  }

  typing() {
    this._chatService.typing({
      to: this.connection_id
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private _chatService: ChatService) {
    this._chatService.me()
      .subscribe(data => {
        localStorage.setItem('user_id', data.user.id);
        localStorage.setItem('name', data.user.name);
      });

    this._chatService.getMessages()
      .subscribe(data => {
        this._chatService.setMessages(data);
      });
  }

  ngOnInit() { }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {

  private conversations: Array;
  private displayedConversations: Array;
  private filter = 'online';

  constructor(private _chatService: ChatService) {

    this._chatService.usersList()
      .subscribe(data => {
        const my_id = localStorage.getItem('user_id');
        this.conversations = data.users.filter(item => item.id !== my_id);
        this.conversations = this.conversations.map(item => {
          return {
            ...item,
            active: false
          };
        });
        this.updateConversationsList();
      });

    this._chatService.userConnected()
      .subscribe(data => {
        const user_id = data.id;
        const user = this.conversations.find(item => item.id === user_id);
        if (user) {
          user.connection_id = data.connection_id;
          user.status = 'online';
        } else {
          this.conversations.push(data.user);
        }
        this.updateConversationsList();
      });

    this._chatService.userDisconnected()
      .subscribe(data => {
        const user = this.conversations.find(item => item.id === data);
        if (user) {
          user.status = 'offline';
        }
        this.updateConversationsList();
      });

  }

  ngOnInit() { }

  ngOnChanges() {

  }

  updateConversationsList() {
    if (this.filter === 'online') {
      this.displayedConversations = this.conversations.filter(item => {
        return item.status === 'online';
      });
    } else {
      this.displayedConversations = this.conversations;
    }
  }

  setActiveConversation(connection_id) {
    const currentActive = this.displayedConversations.find(item => item.active === true);
    if (currentActive) {
      currentActive.active = false;
    }
    const clickedConversation = this.displayedConversations.find(item =>
      item.connection_id === connection_id
    );
    clickedConversation.active = true;
    this._chatService.setActiveConversation(clickedConversation);
  }

  setFilterAll() {
    this.filter = 'all';
    this.displayedConversations = this.conversations;
  }

  setFilterOnline() {
    this.filter = 'online';
    this.displayedConversations = this.conversations.filter(item =>
      item.status === 'online'
    );
  }

  search(str) {
    if (str === '') {
      this.displayedConversations = this.conversations;
    } else {
      this.displayedConversations = this.conversations.filter(item =>
        item.name.includes(str)
      );
    }
    if (this.filter === 'online') {
      this.displayedConversations = this.displayedConversations.filter(item =>
        item.status === 'online'
      );
    }
  }

}

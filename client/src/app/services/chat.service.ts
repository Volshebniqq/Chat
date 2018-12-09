import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('http://localhost:3000', {
    query: localStorage.getItem('user_id') ?
          `user_id=${localStorage.getItem('user_id')}`
          : ''
  });

  private activeConversation = new Subject<any>();
  private messages = new Subject<any>();

  constructor() { }

  me() {
    return new Observable(observer => {
      this.socket.on('me', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  usersList() {
    return new Observable(observer => {
      this.socket.on('users', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  userConnected() {
    return new Observable(observer => {
      this.socket.on('connected', data => {
          observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  userDisconnected() {
    return new Observable(observer => {
      this.socket.on('disconnected', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  newMessage() {
    return new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  getTyping() {
    return new Observable(observer => {
      this.socket.on('typing', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  setActiveConversation(data) {
    this.activeConversation.next(data);
  }

  getActiveConversation() {
    return this.activeConversation.asObservable();
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  messagesList() {
    return this.messages.asObservable();
  }

  typing(data) {
    this.socket.emit('typing', data);
  }

  getMessages() {
    return new Observable(observer => {
      this.socket.on('getmessages', data => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
  }

  setMessages(data) {
    this.messages.next(data);
  }


}

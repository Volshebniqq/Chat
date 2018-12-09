import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar-search',
  templateUrl: './chat-sidebar-search.component.html',
  styleUrls: ['./chat-sidebar-search.component.scss']
})
export class ChatSidebarSearchComponent implements OnInit {

  @Output() onInput: EventEmitter<any> = new EventEmitter<any>();

  private search: string;

  constructor() { }

  ngOnInit() {
  }

  input(e) {
    this.onInput.emit(e.target.value);
  }

}

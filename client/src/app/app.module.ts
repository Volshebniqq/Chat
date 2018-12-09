import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChatService } from './services/chat.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatConversationComponent } from './components/chat-conversation/chat-conversation.component';
import { ChatConversationHeaderComponent } from './components/chat-conversation-header/chat-conversation-header.component';
import { ChatConversationMessageComponent } from './components/chat-conversation-message/chat-conversation-message.component';
import { ChatConversationMessagesContainerComponent } from './components/chat-conversation-messages-container/chat-conversation-messages-container.component';
import { ChatConversationFooterComponent } from './components/chat-conversation-footer/chat-conversation-footer.component';
import { ChatSidebarConversationComponent } from './components/chat-sidebar-conversation/chat-sidebar-conversation.component';
import { ChatSidebarSearchComponent } from './components/chat-sidebar-search/chat-sidebar-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    ChatSidebarComponent,
    ChatConversationComponent,
    ChatConversationHeaderComponent,
    ChatConversationMessageComponent,
    ChatConversationMessagesContainerComponent,
    ChatConversationFooterComponent,
    ChatSidebarConversationComponent,
    ChatSidebarSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

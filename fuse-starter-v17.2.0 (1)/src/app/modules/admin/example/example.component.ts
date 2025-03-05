import { Component, ViewEncapsulation } from '@angular/core';
import { ChatbotService } from 'app/shared/services/chat-bot.services';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    userMessage: string = '';
  messages: string[] = [];
    /**
     * Constructor
     */
    constructor(

        private chatbotService: ChatbotService
    )
    {
    }

    sendMessage() {
        this.messages.push('Bạn: ' + this.userMessage);
        this.chatbotService.sendMessage(this.userMessage).subscribe(response => {
          this.messages.push('Chatbot: ' + response.reply);
        });
        this.userMessage = '';
      }
}

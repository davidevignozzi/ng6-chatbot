import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-chatbot';

  //form for the inputbox
  form: FormGroup;

  // boolean to enable button
  written = false;

  // array of messages sent
  messagesSent= [];
  // array of messages recieved
  messagesReply= [];

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      'message': ['']
    })
  }

  ngOnInit() {
  }

  // ------------------------------------------------ check message.length to enable button
  checkMessage(): void{
    let message = this.form.controls['message'].value;
    if(message.length >= 1){
      this.written = true;
    } else {
      this.written = false;
    }
  }

  // ------------------------------------------------ to send a message
  send(): void{

    let mexContent = this.form.controls['message'].value;

    // push message in the array
    this.messagesSent.push(
      {
        content: mexContent,
        date: new Date(),
        status: 'sent'
      }
    );
    
    // activate Replay after a second
    setTimeout(() => {
      this.autoReplay();
    }, 1000)
    
    // empty input
    this.form.controls['message'].setValue('');
  }

  // ------------------------------------------------ response message
  autoReplay(): void{
    this.messagesReply.push(
      {
        content: 'Ciao',
        date: new Date(),
        status: 'replay'
      }
    )
  }
  
}

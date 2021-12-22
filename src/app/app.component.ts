import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { last } from '@angular/router/src/utils/collection';
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

  // Array all messages
  messages = []

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

    // push message in the array of messages
    this.messages.push(
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
    // last message sent
    let lastMessage = this.messages[this.messages.length - 1].content;

    // greeting
    if(lastMessage.toUpperCase() === 'CIAO' || lastMessage.toUpperCase() === 'HEY' || lastMessage.toUpperCase() === 'HOLA' || lastMessage.toUpperCase() === 'WE' || lastMessage.toUpperCase() === 'EHI' || lastMessage.toUpperCase() === 'SALVE' || lastMessage.toUpperCase() === 'BUONGIORNO' || lastMessage.toUpperCase() === 'BUONASERA' || lastMessage.toUpperCase() === 'HEI'){
      
      // message in the array of messages
      this.messages.push(
        {
          content: 'Ehilà',
          date: new Date(),
          status: 'replay'
        }
      )
    }
    // how are you? 
    else if(lastMessage.toUpperCase() === 'COME VA?' || lastMessage.toUpperCase() === 'COME VA' || lastMessage.toUpperCase() === 'COME STAI?' || lastMessage.toUpperCase() === 'COME STAI' || lastMessage.toUpperCase() === 'COME VA LA VITA?' || lastMessage.toUpperCase() === 'COME VA LA VITA'){
      
      // message in the array of messages
      this.messages.push(
        {
          content: 'Tutto bene dai',
          date: new Date(),
          status: 'replay'
        }
      )
    }
    // who are you? 
    else if(lastMessage.toUpperCase() === 'CHI SEI?'){
      
      // message in the array of messages
      this.messages.push(
        {
          content: 'Sono AngularBot, un Bot creato da un programmatore pigro infatti avrei dovuto sapere come rispondere a molte domande ma in realtà non so niente. Posso solo salutare.',
          date: new Date(),
          status: 'replay'
        }
      )
    }
    // Where are you?
    else if(lastMessage.toUpperCase() === 'DOVE SEI?' || lastMessage.toUpperCase() === 'DOVE VIVI?'){

      // push in the array of messages
      this.messages.push(
        {
          content: 'Sono un Bot...',
          date: new Date(),
          status: 'replay'
        },
        {
          content: 'Vivo dentro internet',
          date: new Date(),
          status: 'replay'
        }
      )
    }
    else if(lastMessage.toUpperCase().includes("COMPONENT") || lastMessage.toUpperCase().includes("SELECTOR") || lastMessage.toUpperCase().includes("NGFOR") || lastMessage.toUpperCase().includes("NGIF")){

      // message in the array of messages
      this.messages.push(
        {
          content: "E' Javascript. Consulta la documentazione di Angular se vuoi saperne di più.",
          date: new Date(),
          status: 'replay'
        }
      )
    } else {

      // push in the array of messages
      this.messages.push(
        {
          content: 'Non ho capito',
          date: new Date(),
          status: 'replay'
        }
      )
    }    
  }
}

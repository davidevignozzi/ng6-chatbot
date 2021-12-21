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

  // array of messages
  messagesArr= [];

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      'message': ['']
    })
  }

  ngOnInit() {
  }

  // check message.length to enable button
  checkMessage(): void{
    let message = this.form.controls['message'].value;
    if(message.length >= 1){
      this.written = true;
    } else {
      this.written = false;
    }
  }

  // to send a message
  send(): void{

    let mexContent = this.form.controls['message'].value;

    // push message in the array
    this.messagesArr.push(
      {
      content: mexContent,
      date: new Date()
      }
    )
    console.log(this.messagesArr);

    // empty input
    this.form.controls['message'].setValue('');

  }
}

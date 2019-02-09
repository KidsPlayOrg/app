// import { NavController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {

  newsForm: FormGroup;

  error_messages = {
    'newsInput': [
      { type: 'required', message: '*Please enter an event title.'},
      { type: 'minlength', message: '*Title length must be longer or equal to 1 characters.'},
      { type: 'maxlength', message: '*Title lenght must be lower or equal to 20 characters.'}

    ],



  }

  constructor(
    public formBuilder: FormBuilder
    ) {
    this.newsForm = this.formBuilder.group({
     newsPrompt: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
     ]))


    });
  
  }

  ngOnInit() {
   

  }

}
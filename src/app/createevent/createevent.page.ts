// import { AlertController} from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl, AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.page.html',
  styleUrls: ['./createevent.page.scss'],
})
export class CreateeventPage implements OnInit {
  
  eventForm: FormGroup;
  eventObj:any;

  error_messages = {
    'eventTitle': [
      { type: 'required', message:  '*Please enter an event title.'},
      { type: 'minlength', message: '*Title length must be longer or equal to 3 character.'},
      { type: 'maxlength', message: '*Title lenght must be lower or equal to 20 characters.'}
      
     ],
     'capacity': [
      { type: 'required', message: '*Please enter the capacity of your event.'},
      { type: 'min', message: '*Capacity must have at least 1 attendee'},
      // { type: 'max', message: '*Capacity should not exceed 50000 attendees.'}
      

     ],
     'location': [
      { type: 'required', message: '*Please enter valid addres of event.'},
      { type: 'minlength', message: '*Please enter an address.'},
      { type: 'maxlength', message: '*This location is not valid.'},
      

     ],
     'description': [
      { type: 'required', message: '*Please give a brief description of your event.'},
      { type: 'minlength', message: '*Please enter a brief description.'},
      { type: 'maxlength', message: '*Description must be equal or less than 250 characters.'},
      

     ],
     'date': [
      { type: 'required', message: '*Please chose a date for your event.'},
      
     ]

  }

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController
    ) {
    this.eventForm = this.formBuilder.group({
      //----
     eventTitle: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
     ])),
     capacity: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(1)
      // Validators.max(50000)
      
     ])),
     location: new FormControl('',Validators.compose([
      Validators.minLength(21),
      Validators.maxLength(100)
     ])),
     description: new FormControl('',Validators.compose([
      Validators.minLength(5),
      Validators.maxLength(250)
     ])),
     date: new FormControl('',Validators.compose([
      Validators.required

     ]))
  

    });
  
  }

  ngOnInit() {
   

  }
  displayEvent(){
    console.log(this.eventForm.value);
  }

}

import { Eventinputs } from './../eventinput';
import { NavController, ToastController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
  
})
export class NewsfeedPage implements OnInit {
 capacityCount = 0;
  events=[
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")},
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")},
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")},
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")},
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")},
    {title: "NBA Basketball game", capacity: 5,location: "5793 Figureo Blvd. Los Angeles CA, 90013", description: "Trip to NBA Game", date: new Date("2019-01-22")}
  ];
  constructor(public toastController: ToastController ) {}
  // trying to make a count in the newsfeed. 
  async eventCount(){
    console.log('Button clicked');
     const toast = await this.toastController.create({
       message: 'You are added to this event',
       duration: 2000
     });
     toast.present();
     ++this.capacityCount;
   }
  ngOnInit() {
    
  }

}


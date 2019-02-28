import { PopoverPage } from './../popover/popover.page';
import { Component, OnInit,Input } from '@angular/core';
import { NavController, ToastController,PopoverController} from '@ionic/angular';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
capacityCount = 0;

@Input() event;
  constructor(public toastController: ToastController, private popoverController: PopoverController) { }

  // eventCount(){
  //   ++this.capacityCount;
  // }
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
    console.log(this.event);
  }
 
  async openPopover(eve: Event){
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
      },
    event: eve
    });
  
    popover.present();
  }

}
 
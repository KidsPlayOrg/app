import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsfeedPage } from './newsfeed.page';
import {EventComponent} from '../event/event.component'

const routes: Routes = [
  {
    path: '',
    component: NewsfeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsfeedPage, EventComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsfeedPageModule {}

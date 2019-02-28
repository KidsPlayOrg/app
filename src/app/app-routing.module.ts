import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'createevent', loadChildren: './createevent/createevent.module#CreateeventPageModule' },
  { path: 'newsfeed', loadChildren: './newsfeed/newsfeed.module#NewsfeedPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'popsover', loadChildren: './popsover/popsover.module#PopsoverPageModule' }
  // { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatInputModule, 
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
//pages
import { SharedModule } from '../shared/shared.module';
//Modulo
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';





@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientDetailsComponent } from './client.details.component';
import { ClientService } from 'src/app/services/client.service';

import { CommonModule } from '@angular/common';

export const ClientDetailsRoutes: Routes = [
  {
    path: 'client/:id',
    
    component: ClientDetailsComponent
  }
];

@NgModule({
  declarations: [ClientDetailsComponent],
  providers:[ClientService],
  imports:[CommonModule]
})
export class ClientDetailsModule {}

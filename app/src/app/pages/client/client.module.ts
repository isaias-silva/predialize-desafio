import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { ClientCardComponent } from 'src/app/components/client.card/client.card.component';
import { ClientCardModule } from 'src/app/components/client.card/client.card.module';
import { CommonModule } from '@angular/common';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  providers:[ClientService],
  imports:[ClientCardModule,CommonModule]
})
export class ClientModule {}

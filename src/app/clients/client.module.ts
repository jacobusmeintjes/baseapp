import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [ClientComponent, ClientListComponent],
  imports: [
    ClientRoutingModule,
    CommonModule
  ],
  exports: [
  ]
})
export class ClientModule { }

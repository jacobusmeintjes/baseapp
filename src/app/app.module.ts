import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { MenuService } from './app.services';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { TrucksModule } from './trucks/trucks.module';
=======
import { MenuItemComponent } from './common/menu/menuitem.component';
>>>>>>> 44078c40bb0c8c7a2f8fc369f12130441396d88f


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
=======
>>>>>>> 44078c40bb0c8c7a2f8fc369f12130441396d88f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

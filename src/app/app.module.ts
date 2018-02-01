import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { MenuService } from './app.services';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './common/menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuItemComponent } from './common/menu/menuitem.component';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, MenuItemComponent, HeaderComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { ClientModule } from './clients/client.module';

import { MenuService } from './app.services';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TrucksModule } from './trucks/trucks.module';
import { MenuComponent } from './common/menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { AppStoreModule } from './store/app-store.module';
import { SharedModule } from './shared/shared.module';
import { CalculatorsModule } from './calculators/calculators.module';


@NgModule({
  declarations: [
    AppComponent, MenuComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    AppStoreModule,
    FormsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

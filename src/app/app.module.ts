import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ElementComponent } from './element/element.component';
import { ListComponent } from './list/list.component';

import { ListService } from './list.service';

import {MapToArrayPipe} from './pipes/map-to-array';
import reducer, { TodoActions } from './state';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ElementComponent,
    ListComponent,
    MapToArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [TodoActions, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ElementComponent } from './element/element.component';
import { ListComponent } from './list/list.component';

import {MapToArrayPipe} from './pipes/map-to-array';
import reducer from './state';
import {TodoEffects} from './effects/todo';

import {TodoAPI} from './todo.service';

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
    StoreModule.provideStore(reducer),
    EffectsModule.run(TodoEffects)
  ],
  providers: [TodoAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }

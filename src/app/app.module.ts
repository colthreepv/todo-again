import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ElementComponent } from './element/element.component';
import { ListComponent } from './list/list.component';

import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ElementComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

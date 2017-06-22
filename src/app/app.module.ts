import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { IpssiComponent } from './ipssi/ipssi.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    IpssiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

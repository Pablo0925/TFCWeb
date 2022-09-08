import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProcesoSeleccionComponent } from './proceso-seleccion/proceso-seleccion.component';
import { HeaderComponent } from './Header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesoSeleccionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

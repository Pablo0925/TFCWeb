import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProcesoSeleccionComponent } from './proceso-seleccion/proceso-seleccion.component';
import { HeaderComponent } from './Header/header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path: '', redirectTo:'',pathMatch:'full'},
  {path: 'procesoSeleccion', component: ProcesoSeleccionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProcesoSeleccionComponent,
    HeaderComponent,
    ProcesoSeleccionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

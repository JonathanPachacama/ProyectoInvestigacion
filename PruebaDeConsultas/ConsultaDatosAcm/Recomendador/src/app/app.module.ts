import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutesAppModules} from "./Routes";
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ArticuloComponent } from './Componentes/articulo/articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    RoutesAppModules,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

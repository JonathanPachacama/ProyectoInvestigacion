import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./Componentes/inicio/inicio.component";


export const routes: Routes = [
  {
    path: 'Datos-desde-endpoint-Sparql',
    component: InicioComponent,

  },

];
export const RoutesAppModules: ModuleWithProviders = RouterModule.forRoot(routes);

/******************************************************************************
 * @Directora del proyecto: Sabina López Toledo                               *
 * @Coordinadora y Desarrolladora: Silviana Juárez Chalini                    *
 * @Desarrollador: Rolando Pedro Gabriel                                      *
 * Fecha de Creación: 22/04/2022                                              *
 * Fecha de Actualización: 11/07/2023                                         *
 * Descripción: Clase principal del proyecto Contenido Nutricio Front-End,    *
 *              se integran las diferentes rutas del proyecto.                *
 *****************************************************************************/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenaComponent } from './cena/cena.component';
import { ColacionmatutinaComponent } from './colacionmatutina/colacionmatutina.component';
import { ColacionvespertinaComponent } from './colacionvespertina/colacionvespertina.component';
import { ComidaComponent } from './comida/comida.component';
import { ConcentradoComponent } from './concentrado/concentrado.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { HomeComponent } from './home/home.component';
import { TiempocomidaComponent } from './tiempocomida/tiempocomida.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { AdmonSolicitaComponent } from './admon-solicita/admon-solicita.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tiempocomida', component: TiempocomidaComponent},
  {path: 'desayuno', component: DesayunoComponent},
  {path: 'colacion-matutina', component: ColacionmatutinaComponent},
  {path: 'comida', component: ComidaComponent},
  {path: 'colacion-vespertina', component: ColacionvespertinaComponent},
  {path: 'cena', component: CenaComponent},
  {path: 'concentrado', component: ConcentradoComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'admon-solicita', component: AdmonSolicitaComponent},
  { path: 'registrar', component: UsuarioComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

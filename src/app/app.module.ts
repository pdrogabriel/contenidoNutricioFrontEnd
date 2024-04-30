/******************************************************************************
 * @Directora del proyecto: Sabina López Toledo                               *
 * @Coordinadora y Desarrolladora: Silviana Juárez Chalini                    *
 * @Desarrollador: Rolando Pedro Gabriel                                      *
 * Fecha de Creación: 22/04/2022                                              *
 * Fecha de Actualización: 11/07/2023                                         *
 * Descripción: Clase principal del proyecto Contenido Nutricio Front-End,    *
 *              se integran los diferentes módulos desarrollados como módulos *
 *              necesarios para la ejecución del sistema.                     *
 *****************************************************************************/

import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { ColacionmatutinaComponent } from './colacionmatutina/colacionmatutina.component';
import { ComidaComponent } from './comida/comida.component';
import { ColacionvespertinaComponent } from './colacionvespertina/colacionvespertina.component';
import { CenaComponent } from './cena/cena.component';
import { HomeComponent } from './home/home.component';
import { ConcentradoComponent } from './concentrado/concentrado.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TiempocomidaComponent } from './tiempocomida/tiempocomida.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { LoginComponent } from './login/login.component';
import { AdmonSolicitaComponent } from './admon-solicita/admon-solicita.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DesayunoComponent,
    ColacionmatutinaComponent,
    ComidaComponent,
    ColacionvespertinaComponent,
    CenaComponent,
    HomeComponent,
    ConcentradoComponent,
    TiempocomidaComponent,
    UsuarioComponent,
    UsuarioComponent,
    AcercadeComponent,
    LoginComponent,
    AdmonSolicitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
import { UsuarioComponent } from './usuario/usuario/usuario.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

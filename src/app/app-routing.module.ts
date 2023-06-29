import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenaComponent } from './cena/cena.component';
import { ColacionmatutinaComponent } from './colacionmatutina/colacionmatutina.component';
import { ColacionvespertinaComponent } from './colacionvespertina/colacionvespertina.component';
import { ComidaComponent } from './comida/comida.component';
import { ConcentradoComponent } from './concentrado/concentrado.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { HomeComponent } from './home/home.component';
import { TiempocomidaComponent } from './tiempocomida/tiempocomida.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { AdmonAdminComponent } from './admon-admin/admon-admin.component';
import { AdmonSolicitaComponent } from './admon-solicita/admon-solicita.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'tiempocomida', component: TiempocomidaComponent},
  {path: 'desayuno', component: DesayunoComponent},
  {path: 'colacion-matutina', component: ColacionmatutinaComponent},
  {path: 'comida', component: ComidaComponent},
  {path: 'colacion-vespertina', component: ColacionvespertinaComponent},
  {path: 'cena', component: CenaComponent},
  {path: 'concentrado', component: ConcentradoComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'admon-admin', component: AdmonAdminComponent},
  {path: 'admon-solicita', component: AdmonSolicitaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

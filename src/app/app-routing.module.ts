import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path:'vehicule',
  //   component: VehiculeComponent
  // },
  // {
  //   path:'voiture',
  //   component: VoitureComponent
  // },
  // {
  //   path: 'camion',
  //   component: CamionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

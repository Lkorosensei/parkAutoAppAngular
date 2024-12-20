import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { CamionComponent } from './components/camion/camion.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
  path:'vehicules',
  component : VehiculeComponent
},
  {
  path:'voiture',
  component : VoitureComponent
},
  {
  path:'camion',
  component : CamionComponent
},
{
  path:'cart',
  component:CartComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

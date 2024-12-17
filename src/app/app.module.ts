import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { CamionComponent } from './components/camion/camion.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    VoitureComponent,
    CamionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

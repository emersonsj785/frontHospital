import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { ProvinciasFormComponent } from './components/provincias/provincias-form.component';
import { FormsModule } from '@angular/forms';
import { HospitalessFormComponent } from './components/hospitales/hospitaless-form.component';
import { HospitalessEditarComponent } from './components/hospitales/hospitaless-editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasComponent,
    HospitalesComponent,
    ProvinciasFormComponent,
    HospitalessFormComponent,
    HospitalessEditarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

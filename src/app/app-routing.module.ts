import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { ProvinciasFormComponent } from './components/provincias/provincias-form.component';
import { HospitalessFormComponent } from './components/hospitales/hospitaless-form.component';
import { HospitalessEditarComponent } from './components/hospitales/hospitaless-editar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'provincias', component: ProvinciasComponent},
  {path: 'provincias/form', component: ProvinciasFormComponent},
  {path: 'hospitales', component: HospitalesComponent},
  {path: 'hospitales/form', component: HospitalessFormComponent},
  {path: 'hospitales/editar', component: HospitalessEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

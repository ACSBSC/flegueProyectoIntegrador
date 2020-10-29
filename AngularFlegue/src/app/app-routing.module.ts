import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppointmentComponent} from './components/appointment/appointment.component';
import {AppointmentFormComponent} from './components/appointment-form/appointment-form.component';
import {AppointmentFormEditComponent} from './components/appointment-form-edit/appointment-form-edit.component';
import {AppointmentShowComponent} from './components/appointment-show/appointment-show.component';
import {ChatBotComponent} from './components/chat-bot/chat-bot.component';
import {EmergencyButtonComponent} from './components/emergency-button/emergency-button.component';
import {EstadoDeAnimoComponent} from './components/estado-de-animo/estado-de-animo.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {LoginComponent} from './components/login/login.component'; // checar login
import {MedicinasComponent} from './components/medicinas/medicinas.component';
import {MedicinasFormComponent} from './components/medicinas-form/medicinas-form.component';
import {MedicinasFormEditComponent} from './components/medicinas-form-edit/medicinas-form-edit.component';
import {MedicinasShowComponent} from './components/medicinas-show/medicinas-show.component';
import {RegisterComponent} from './components/register/register.component';//checar login
import {ResumenCuidadorComponent} from './components/resumen-cuidador/resumen-cuidador.component';
import {ResumenUsuarioComponent} from './components/resumen-usuario/resumen-usuario.component';
import {SelectUserComponent} from './components/select-user/select-user.component';
import {SignosVitalesComponent} from './components/signos-vitales/signos-vitales.component';
import {SignosVitalesButtonComponent} from './components/signos-vitales-button/signos-vitales-button.component';
import {SignosVitalesHistorialComponent} from './components/signos-vitales-historial/signos-vitales-historial.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';
import {UserShowComponent} from './components/user-show/user-show.component';

import { AuthGuardGuard } from './auth-guard.guard';



const routes: Routes = [
  //{path: '', redirectTo: '/log-in', pathMatch: 'full'},

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuardGuard]},
  {path: 'appointment-form', component: AppointmentFormComponent, canActivate: [AuthGuardGuard]},
  {path: 'appointment-edit', component: AppointmentFormEditComponent, canActivate: [AuthGuardGuard]},
  {path: 'appointment-show', component: AppointmentShowComponent, canActivate: [AuthGuardGuard]},
  {path: 'chatbot', component: ChatBotComponent, canActivate: [AuthGuardGuard]},
  {path: 'emergency-button', component: EmergencyButtonComponent, canActivate: [AuthGuardGuard]},
  {path: 'estado-animo', component: EstadoDeAnimoComponent, canActivate: [AuthGuardGuard]},
  {path: 'inicio', component: InicioComponent},
  {path: 'log-in', component: LoginComponent},
  {path: 'medicinas', component: MedicinasComponent, canActivate: [AuthGuardGuard]},
  {path: 'medicinas-form', component: MedicinasFormComponent, canActivate: [AuthGuardGuard]},
  {path: 'medicinas-edit', component: MedicinasFormEditComponent, canActivate: [AuthGuardGuard]},
  {path: 'medicinas-show', component: MedicinasShowComponent, canActivate: [AuthGuardGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'resumen-cuidador', component: ResumenCuidadorComponent, canActivate: [AuthGuardGuard]},
  {path: 'resumen-usuario', component: ResumenUsuarioComponent, canActivate: [AuthGuardGuard]},
  {path: 'select-user', component: SelectUserComponent, canActivate: [AuthGuardGuard]},
  {path: 'signos-vitales', component: SignosVitalesComponent, canActivate: [AuthGuardGuard]},
  {path: 'signos-vitales-button', component: SignosVitalesButtonComponent, canActivate: [AuthGuardGuard]},
  {path: 'signos-vitales-historial', component: SignosVitalesHistorialComponent, canActivate: [AuthGuardGuard]},
  {path: 'user-add', component: UserAddComponent, canActivate: [AuthGuardGuard]},
  {path: 'user-delete', component: UserDeleteComponent, canActivate: [AuthGuardGuard]},
  {path: 'user-show', component: UserShowComponent, canActivate: [AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

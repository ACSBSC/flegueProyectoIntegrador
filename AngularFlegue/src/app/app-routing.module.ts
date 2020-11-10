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
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToCuidador = redirectLoggedInTo(['']);



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'appointment-form', component: AppointmentFormComponent},
  {path: 'appointment-edit', component: AppointmentFormEditComponent},
  {path: 'appointment-show', component: AppointmentShowComponent},
  {path: 'chatbot', component: ChatBotComponent},
  {path: '', component: EmergencyButtonComponent, canActivate: [AngularFireAuthGuard], data:{ authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'estado-animo', component: EstadoDeAnimoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'medicinas', component: MedicinasComponent},
  {path: 'medicinas-form', component: MedicinasFormComponent},
  {path: 'medicinas-edit', component: MedicinasFormEditComponent},
  {path: 'medicinas-show', component: MedicinasShowComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'resumen-cuidador', component: ResumenCuidadorComponent},
  {path: 'resumen-usuario', component: ResumenUsuarioComponent},
  {path: 'select-user', component: SelectUserComponent},
  {path: 'signos-vitales', component: SignosVitalesComponent},
  {path: 'signos-vitales-button', component: SignosVitalesButtonComponent},
  {path: 'signos-vitales-historial', component: SignosVitalesHistorialComponent},
  {path: 'user-add', component: UserAddComponent},
  {path: 'user-delete', component: UserDeleteComponent},
  {path: 'user-show', component: UserShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

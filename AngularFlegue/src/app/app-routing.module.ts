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
import { AuthmasterGuard } from './services/firebase/authmaster.guard';
import { CuidadorGuard } from './services/firebase/cuidador.guard';
import { AbuelitoGuard } from './services/firebase/abuelito.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToCuidador = redirectLoggedInTo(['']);


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'appointment', component: AppointmentComponent, canActivate: [AbuelitoGuard]},
  {path: 'appointment-form', component: AppointmentFormComponent, canActivate: [AbuelitoGuard]},
  {path: 'appointment-edit/:id', component: AppointmentFormEditComponent, canActivate: [AbuelitoGuard]},
  {path: 'appointment-show/:id', component: AppointmentShowComponent, canActivate: [AbuelitoGuard]},
  {path: 'chatbot', component: ChatBotComponent, canActivate: [AbuelitoGuard]},
  {path: '', component: EmergencyButtonComponent, canActivate: [AuthmasterGuard] },
  {path: 'estado-animo', component: EstadoDeAnimoComponent, canActivate: [AbuelitoGuard]},
  {path: 'inicio', component: InicioComponent},
  {path: 'medicinas', component: MedicinasComponent, canActivate: [AbuelitoGuard]},
  {path: 'medicinas-form', component: MedicinasFormComponent, canActivate: [AbuelitoGuard]},
  {path: 'medicinas-edit/:id', component: MedicinasFormEditComponent, canActivate: [AbuelitoGuard]},
  {path: 'medicinas-show/:id', component: MedicinasShowComponent, canActivate: [AbuelitoGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'resumen-cuidador/:id', component: ResumenCuidadorComponent, canActivate: [CuidadorGuard]},
  {path: 'resumen-usuario', component: ResumenUsuarioComponent, canActivate: [AbuelitoGuard]},
  {path: 'select-user', component: SelectUserComponent, canActivate: [CuidadorGuard]},
  {path: 'signos-vitales', component: SignosVitalesComponent, canActivate: [AbuelitoGuard]},
  {path: 'signos-vitales-button', component: SignosVitalesButtonComponent, canActivate: [AbuelitoGuard]},
  {path: 'signos-vitales-historial', component: SignosVitalesHistorialComponent, canActivate: [AbuelitoGuard]},
  {path: 'user-add', component: UserAddComponent, canActivate: [CuidadorGuard]},
  {path: 'user-delete', component: UserDeleteComponent, canActivate: [CuidadorGuard]},
  {path: 'user-show/:id', component: UserShowComponent, canActivate: [CuidadorGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

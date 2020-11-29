import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentFormEditComponent } from './components/appointment-form-edit/appointment-form-edit.component';
import { AppointmentShowComponent } from './components/appointment-show/appointment-show.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { EmergencyButtonComponent } from './components/emergency-button/emergency-button.component';
import { EstadoDeAnimoComponent } from './components/estado-de-animo/estado-de-animo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MedicinasComponent } from './components/medicinas/medicinas.component';
import { MedicinasFormComponent } from './components/medicinas-form/medicinas-form.component';
import { MedicinasFormEditComponent } from './components/medicinas-form-edit/medicinas-form-edit.component';
import { MedicinasShowComponent } from './components/medicinas-show/medicinas-show.component';
import { RegisterComponent } from './components/register/register.component';
import {ResumenCuidadorComponent} from './components/resumen-cuidador/resumen-cuidador.component';
import { ResumenUsuarioComponent } from './components/resumen-usuario/resumen-usuario.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { SignosVitalesComponent } from './components/signos-vitales/signos-vitales.component';
import { SignosVitalesButtonComponent } from './components/signos-vitales-button/signos-vitales-button.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserShowComponent } from './components/user-show/user-show.component';
import { SignosVitalesHistorialComponent } from './components/signos-vitales-historial/signos-vitales-historial.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase/firebase.service';
import { FirebaseAuthService } from "./services/firebase/firebase-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentFormComponent,
    AppointmentFormEditComponent,
    AppointmentShowComponent,
    ChatBotComponent,
    EmergencyButtonComponent,
    EstadoDeAnimoComponent,
    InicioComponent,
    LoginComponent,
    MedicinasComponent,
    MedicinasFormComponent,
    MedicinasFormEditComponent,
    MedicinasShowComponent,
    RegisterComponent,
    ResumenCuidadorComponent,
    ResumenUsuarioComponent,
    SelectUserComponent,
    SignosVitalesComponent,
    SignosVitalesButtonComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserShowComponent,
    SignosVitalesHistorialComponent,
    ResumenCuidadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
  ],
  providers: [FirebaseService, FirebaseAuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

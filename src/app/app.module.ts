import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'


import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { GoogleMaps } from'@ionic-native/google-maps';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './firebase';
import { UserService } from './user.service';
import { PerfilPage } from './perfil/perfil.page';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page'

import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EventomodalPageModule } from './eventomodal/eventomodal.module'
import { EventomodalPage } from './eventomodal/eventomodal.page';
import { NavParams } from '@ionic/angular';
import { Injector } from '@angular/core'
import { ActionSheetController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { SimpleLoadingStrategy } from './selective-loading-strategy.service'
import { EditarModalPage } from './editar-modal/editar-modal.page';
import { EditarModalPageModule }from './editar-modal/editar-modal.module';
import { Screenshot } from "@ionic-native/screenshot/ngx"
import{ UsuarioPesquisaPage } from './usuario-pesquisa/usuario-pesquisa.page';
import { UsuarioPesquisaPageModule } from './usuario-pesquisa/usuario-pesquisa.module'
import { HomePageModule } from './home/home.module'
import{ EventoPesquisaPage } from './evento-pesquisa/evento-pesquisa.page';
import {EventoPesquisaPageModule } from './evento-pesquisa/evento-pesquisa.module'
import { CriarUserPage } from './criar-user/criar-user.page';
import { TutorialPage } from './tutorial/tutorial.page'
import { TutorialPageModule } from './tutorial/tutorial.module'
import { ProximoEventoPageModule } from './eventos-do-usuario/proximo-evento.module';
import { ProximoEventoPage } from './eventos-do-usuario/proximo-evento.page';
import { PesquisarPage } from './pesquisar/pesquisar.page';
import { SocialSharing  } from "@ionic-native/social-sharing/ngx"
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Camera } from "@ionic-native/camera/ngx"
@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [  ],
  imports: [BrowserModule,
    IonicModule.forRoot(),
      AppRoutingModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireStorageModule,
      AngularFireAuthGuardModule,
      AngularFireDatabaseModule,   
      ReactiveFormsModule,
      HomePageModule,
      FormsModule,
      AngularFireAuthModule,
      EventomodalPageModule,
      ProximoEventoPageModule,
      EditarModalPageModule,
      TutorialPageModule,
      UsuarioPesquisaPageModule,
      EventoPesquisaPageModule,
      HttpModule,  ],
  providers: [
    StatusBar,
    Network,
    SplashScreen,
    GoogleMaps,
    UserService,
    PerfilPage,
    CriarUserPage,
    PesquisarPage,
    TutorialPage,
    LoginPage,
    SimpleLoadingStrategy,
    HomePage,
    EditarModalPage,
    EventomodalPage,
    UsuarioPesquisaPage,
    Screenshot,
    InAppBrowser,
    SocialSharing,
    BackgroundMode,
    NavParams,
    ImagePicker,
    Camera,
    File,
    ActionSheetController,
    ProximoEventoPage,
    EventoPesquisaPage,
    { provide: RouteReuseStrategy,  useClass: IonicRouteStrategy ,  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  constructor(private injector: Injector) {
    AppModule.injector = injector;
  }}

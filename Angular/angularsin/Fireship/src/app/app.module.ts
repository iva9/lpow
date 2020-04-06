import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyDZ4Z5hLABa0Wv1d7mjuYX6Qx0eDv9v_R0",
  authDomain: "angular-image-40278.firebaseapp.com",
  databaseURL: "https://angular-image-40278.firebaseio.com",
  projectId: "angular-image-40278",
  storageBucket: "angular-image-40278.appspot.com",
  messagingSenderId: "973623827871",
  appId: "1:973623827871:web:675f141f238c543aaab1aa",
  measurementId: "G-D50LX8PBP4"
};
@NgModule({
  
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule 
  ],
  providers: [],
  bootstrap: [AppComponent, ],
  
  
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadTaskComponent } from './upload-task/upload-task.component'
import { UploaderComponent } from './uploader/uploader.component';


const routes: Routes = [ 
     
    {path:'uploader', component: UploaderComponent },
    {path:'task', component: UploadTaskComponent}
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

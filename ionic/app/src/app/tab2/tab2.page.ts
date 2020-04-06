import { Component,  OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page implements OnInit {
  @Input() file: File;
  files: File[] = [];
  
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  event: any;

  ngOnInit() { this.logIt(`OnInit`); this.startUpload(); }
  logIt(msg: string) {
    
  }
@ViewChild('fileButton', {static: false}) fileButton
  
  constructor(public http: HttpClient,
     public afstore: AngularFirestore,
      public user: UserService,
      private alertController: AlertController,
      private router: Router,
      private storage: AngularFireStorage) {}
  
  imageURL: string; 
  desc: string;
  
 startUpload(){
  const path = `test/${Date.now()}_${this.file.name}`; 
  // Reference to storage bucket
   const ref = this.storage.ref(path);

   // The main task
   this.task = this.storage.upload(path, this.file);

   this.snapshot   = this.task.snapshotChanges().pipe(
    tap(console.log),
    // The file's download URL
    finalize( async() =>  {
      this.imageURL = await ref.getDownloadURL().toPromise();

      this.afstore.collection('files').add( { downloadURL: this.imageURL, path });
    }),
  );
 }
 
  fileChanged(event){
    
    const files = event.target.files
    
  
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE' , '1')
    data.append('UPLOADCARE_PUB_KEY', '413c53e2723aa46b5a68')

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event =>{ 
    console.log(event)
     
    //this.imageURL = event.file;
  
      })
    
      }
  }


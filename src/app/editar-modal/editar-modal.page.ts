import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { NavParams , ModalController, LoadingController } from '@ionic/angular';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database'
import {UserService} from '../user.service'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { delay , map } from 'rxjs/operators';
import { Data } from '../evento.service'
import { Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection,  } from '@angular/fire/firestore';
import { Camera } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.page.html',
  styleUrls: ['./editar-modal.page.scss'],
})
export class EditarModalPage implements OnInit {
  @ViewChild('fileButton' ,  {static: false}) fileButton;
    items ;
    x;
    roda : boolean = false;
    selectedImage: any = null;
    img;
    url
    newUsername = ''
    loading
    coisas : Data[];
    private eventocidade: AngularFirestoreCollection;
    public cidade = new Array<any>();
    private eventosdacidade: Subscription;


    a;
    b;
    public c = new Array<any>();
  constructor( @Inject(AngularFireStorage) 
  private storage: AngularFireStorage ,@Inject(UserService) 
  private modal : ModalController ,
  private auth : AngularFireAuth,
  private camera : Camera,
  private user : UserService,
  private firestore : AngularFirestore,
  public alert: AlertController,
  private navparams : NavParams,
  private loadingC : LoadingController,
  private firebase : AngularFireDatabase,
  private route : Router
  ) {
   
   }

  ngOnInit(  ) {
    this.x = this.navparams.get('customid')
    this.img = "../assets/icon/profile.png";
    this.getDataFromFire()
   }


   takePicture() {
    this.camera.getPicture({
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType : this.camera.DestinationType.DATA_URL
    }).then(res => {
      this.img = "data:image/jpeg;base64," + res
    }).catch(e =>{
      console.log(e)
    })

  }

   showPreview(event: any){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.img = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }else{
      this.img = "../assets/icon/profile.png";
      this.selectedImage = null;
    }
  }
  writeUserData( ){
    this.fileButton.nativeElement.click()
 }

 async presentLoading(){
  this.loading = await this.loadingC.create({
     cssClass: 'my-custom-class',
     message: 'Espere um momento...',
     duration: 2000
   });
   await this.loading.present();
  }

async editar(){
  this.presentLoading()
  const todosnomes = this.items
  const osnomes = this.newUsername.toLowerCase()
  if (!this.selectedImage && !this.newUsername){
    this.close()
  }
 
  if(!this.selectedImage){
    if( todosnomes.some( nome => (nome.username.username == osnomes)) ){
        return this.showalert("Erro" ,"nome ja existente")
      }
    
    if (this.newUsername != ''){
      console.log('não tem imagem')
    this.user.updateNome(this.newUsername.toLowerCase())
    }
  }

  if (this.selectedImage){
  var name = this.selectedImage.name;
  const fileReff =  this.storage.ref(name);
  
   (await this.storage.upload(name, this.selectedImage)).downloadURL
    
    fileReff.getDownloadURL().subscribe((url) => {
        this.url = url;
        console.log(this.url)
        if(!this.newUsername){
          console.log('não tem nome')
          this.user.updateImage( this.url)
        }
        else{
        this.user.updateProfile(this.url , this.newUsername)
    }} ) }
          
          this.close()
          this.loadingC.dismiss()
          } 
criandomodal(){}

close(){
  this.modal.dismiss();
}
getDataFromFire(){
  this.firebase.list('users').valueChanges().subscribe(
    data =>{
      this.trataDados(data)
    }) 
}
trataDados(dados){
  this.items = Object.keys(dados).map(i => dados[i])  

   } 
   async showalert(header : string , message: string){
    const alert = await  this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })
    await alert.present() 
  }

  geteventos(){
    console.log("clicado")
  this.eventocidade = this.firestore.collection("eventos", ref => ref.where("lugar", "==", "Rio de Janeiro")) 
   return this.eventocidade.get().subscribe( coisas => {
     coisas.forEach(b => {
       const data = b.data()
       const id = b.id
       this.a =  { id, ...data }
     this.c.push(this.a)
    console.log(this.c)
    })
    
    })
  
}}
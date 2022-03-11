import { Component, OnInit, Query,ViewChild } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { InAppBrowser , InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import * as moment from 'moment'
import firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-eventomodal',
  templateUrl: './eventomodal.page.html',
  styleUrls: ['./eventomodal.page.scss'],
})
export class EventomodalPage implements OnInit {
  @ViewChild(IonContent ,  { static: true }) content: IonContent;
  x : any;
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  verdade : boolean = false
  momentto;
  UPnum ;
  num  = 30
  updateReference;
  denunciaReference;
  noAuth = true 
  nome; 
  jadeuUP : boolean = false
  numcoments = 0 ;
  newlocal;
  dado : Array<object> = []
  lugardocomentario;
  comentario : string = ""
   coments;
   description:boolean = true
   iduser
   userIDCOMENT
   numTimesLeft = 2;
  todoscoments
  lugaresdocomentario
  lugardocomentario2
  ComentSet : ComentUsuario ={    
    img : '',
    username : '',
    comentarioU : '',
    UID :''
  }
  eventoid;

  
  constructor( 
    private alert : AlertController,
    private router : Router,
    private navparams : NavParams ,
    private modal : ModalController ,
    private Firebase : AngularFireDatabase,
    private auth : AngularFireAuth ,
    private firestore: AngularFirestore,
    private iab: InAppBrowser,
    ) { 
    }
  async ngOnInit() {
    const res  = await this.auth.currentUser
    if (res != null){
      this.iduser = res.uid
      this.noAuth = false
    } 
    this.lugardocomentario = this.Firebase.database.ref(`coments/${this.x.id}`)
  this.getComent()

  }
criandomodal(evento){
  this.x = evento
  this.UPnum = this.x.UPnum
  console.log(evento.id)
  this.jaUpou()
  if(this.x.dia.length > 18){
    moment.locale('pt-BR')
    this.momentto = moment(this.x.dia).format('ddd DD MMM')
    console.log(this.momentto)
    this.x.dia = this.momentto
  }
  
  this.eventoid = evento.id

}
async setcoment(){
  const res =await this.auth.currentUser
  if(this.comentario != null && !this.comentario.trim()){
    this.showalert("Erro" , "Digite um comentario")
  }
  else{
  this.ComentSet ={
    img : res.photoURL,
    username : res.displayName,
    comentarioU : this.comentario,
    UID : this.iduser
  }
  this.lugardocomentario.push(this.ComentSet)
  this.comentario = ""
}
}



getComent(){
  this.lugaresdocomentario = this.Firebase.list(`coments/${this.x.id}`, ref => ref.limitToFirst(this.num));
this.lugaresdocomentario.valueChanges().subscribe(
  data =>{
    this.trataDados(data)
  })
}
async  UP(){
  if (this.iduser == null){
    this.jadeuUP = true
    return this.showAlertLogin()
  }
  this.jadeuUP = true
  const res = await this.auth.currentUser
  if(this.x.up.includes(this.iduser)){
    return this.showalert("Ops!", "Você ja deu UP nesse evento")
    
  }
  this.x.UPnum +=  1
  this.UPnum += 1
    this.updateReference  = this.firestore.doc(`eventos/${this.x.id}`)
    this.updateReference.update( {
      up : firebase.firestore.FieldValue.arrayUnion(res.uid),
      UPnum: firebase.firestore.FieldValue.increment(1)
    })
    
  }
 
  jaUpou(){
    if(this.x.up.includes(this.iduser)){
      this.jadeuUP = true
    }

    
  }

  comentauth(){
    if (this.iduser == null){
      this.showAlertLogin()
    }
  }
   
  
redirectmap(){
  this.iab.create(`https://www.google.com/maps/search/?api=1&query=${this.x.local.description}`,'_system')
}

redirectlink(){
  
  
 this.iab.create(`${this.x.ingresso}` , '_system' , this.options)
}
redirectUser(){
  this.close()
  this.router.navigate(['/usuario-pesquisa/' + this.x.userID[0]])
}
async showalert(header : string , message: string){
  const alert = await  this.alert.create({
    header,
    message,
    buttons: ["Ok"]
  })
  await alert.present() 
}
trataDados(dados){
this.coments = Object.keys(dados).map(i => dados[i]).reverse()
this.numcoments = this.coments.length
this.todoscoments = this.coments
console.log(this.todoscoments,'foi')
}

async showAlertLogin() {
  const alert = await this.alert.create({
    header: 'Ops!',
    message: 'Crie ou entre em uma conta para usar ups e comentários.',
    buttons: [
      {
        text: 'Criar / Entrar',
       
        handler: ()  => {
         this.router.navigate(['/criar-user'])
         this.close()
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}


loadcoments(event){
  this.num = this.num + 60
  this.numTimesLeft -= 1;

  this.getComent()
  this.content.scrollToBottom()
  event.target.complete();
}
page(kdcoment){
  this. userIDCOMENT = kdcoment.UID
  this.close()
  this.router.navigate(['/usuario-pesquisa/' + this. userIDCOMENT])  
 }

 close(){
   this.modal.dismiss();
 }
 Compartilhar(){
  
  this.router.navigate(['/share/' + this.x.chave2])
  this.close()
 }
}
export interface ComentUsuario{
  img : string,
  username : string,
  comentarioU : string
  UID: any
}

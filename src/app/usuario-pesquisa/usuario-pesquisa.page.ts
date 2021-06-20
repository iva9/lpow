import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { EventomodalPage } from'../eventomodal/eventomodal.page';
import { ModalController } from'@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { UserService } from '../user.service';
import * as moment from 'moment' 

@Component({ 
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.page.html',
  styleUrls: ['./usuario-pesquisa.page.scss'],
})
export class UsuarioPesquisaPage implements OnInit {
  hjdia = new Date().toISOString();
  userID 
  userrr;
  denuncias : AngularFirestoreDocument<any>;
  denunciaReference;
  followReference;
  caminho

  private eventocriado : AngularFirestoreCollection;
  private eventoup : AngularFirestoreCollection;
  private eventocriado2 : AngularFirestoreCollection;
  private eventoup2 : AngularFirestoreCollection;
  public passadostate: AngularFirestoreDocument;

  private eventos = new Array<any>()
  private eventos2 = new Array<any>()

  private criados = new Array<any>();
  private criados2 = new Array<any>();

  y = new Array<any>();
  w = new Array<any>();
  y2 = new Array<any>();
  w2 = new Array<any>();

  provCria1   
  provCria2   
  provUp1 
  provUp2 

  nextQueryCriados
  nextQueryUp


  ultimoUP
  ultimoCriado
  tipo
  
  eventDetailList: AngularFirestoreCollection;
  m
  private userDOC : AngularFirestoreCollection;


  constructor(private route : ActivatedRoute 
    , private firestore :  AngularFirestore,
      private auth:  AngularFireAuth,
      public eventModal : EventomodalPage,
      private modalCtrl : ModalController,
      private actionSheetCtrl: ActionSheetController,
      private user : UserService) {  }

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('uid')
    this.getUser(this.userID).subscribe(data => {
      this.userrr = data;
    })
    console.log(this.userID)
    this.listadeup(this.userID)
    this.eventos = this.y
    console.log(this.eventos)
    const uniqueUps = this.eventos.filter( function( elem, i, array ) {
        return array.indexOf( elem ) === i;
    } );

    console.log(this.eventos)
    this.listadecriados(this.userID)
    this.criados = this.w

  }
  loadups(event) { // scroll down (UPs)
    setTimeout(() => {
      console.log();
    
      this.listadeup2(this.userID)
      this.eventos2 = this.y2
  
     
      event.target.complete();

    }, 2000);
  }
  
  loadcriados(event) { // scroll down (Criados)
    setTimeout(() => {
      console.log();
      
      
      this.listadecriados2(this.userID )
      this.criados2 = this.w2
     
      event.target.complete();

    }, 2000);
  }
  


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Configurações',
      cssClass: 'my-custom-class',
      buttons: [ {
        text: 'Denunciar',
        icon: 'alert',
        handler: () => {
       this.denuncia()
        }
      }, //{
       // text: 'ligar notificações',
       // icon: 'notifications',
       // handler: () => {

        //}
     // }
       {
        text: 'Sair',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  getUser(user){
    this.userDOC = this.firestore.collection(`users`, ref => ref.where('iduser','==',`${user}`))
    return this.userDOC.snapshotChanges(['added']).pipe(
      map(actions => {
        return actions.map(use => {
          const data = use.payload.doc.data();
          const id = use.payload.doc['id'];

          return { id, ...data };
        });
      })
    );
  }
  
  async showmodal(zeta){
    const modal = await this.modalCtrl.create({
      component : EventomodalPage,
      componentProps:{
        customid :  zeta
      }
    })
    modal.present();;
    this.eventModal.criandomodal(zeta)
  }
  

async  follow(){
  const res = await this.auth.currentUser
  this.followReference  = this.firestore.doc(`users/${this.userrr[0].id}`)
   this.followReference.update( {
     followed : firebase.firestore.FieldValue.arrayUnion(res.uid)
   })
  }  
  async denuncia(){
    this.user.denuncia(this.userID)
    if(this.userrr[0].Denuncias  > 25){
      this.user.todasdenuncias(this.userrr[0])
   
    }
  }
  async  unfollow(){
    const res = await this.auth.currentUser
    this.followReference  = this.firestore.doc(`users/${this.userrr[0].id}`)
     this.followReference.update( {
       followed : firebase.firestore.FieldValue.arrayRemove(res.uid)
     })
    }

    listadecriados(cria){
      console.log(cria)
      this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID','array-contains',`${cria}`).orderBy("UPnum" , "desc").limit(10))
      this.eventocriado.get().subscribe( criados =>{
         criados.forEach( Evcup =>{
           const data = Evcup.data()
           const id = Evcup.id
           if (data.fim < this.hjdia) {
            console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
            this.passadostate = this.firestore.doc(`eventos/${id}`)
            this.passadostate.update({
              passado: true
            })
          }
          moment.locale('pt-BR')
          this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
          data.dia = this.m 
          this.provCria1 = { id, ...data }
          this.w.push(this.provCria1)
          this.nextQueryCriados = Evcup
         })
       
      })
    }
    listadecriados2(cria2){
    const lastC = this.nextQueryCriados 
      this.eventocriado2 = this.firestore.collection('eventos', ref => ref.where('userID','array-contains',`${cria2}`).orderBy("UPnum" , "desc").startAfter(lastC).limit(10))
       return this.eventocriado2.get().subscribe( criados =>{
        criados.forEach( cRia =>{
          const data = cRia.data()
          const id = cRia.id
          if (data.fim < this.hjdia) {
           console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
           this.passadostate = this.firestore.doc(`eventos/${id}`)
           this.passadostate.update({
             passado: true
           })
         }
         moment.locale('pt-BR')
         this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
         data.dia = this.m 
         this.provCria2 = { id, ...data }
         this.w2.push(this.provCria2)
         this.nextQueryCriados = cRia
        })
      
     })
    }
    listadeup(up_us){
      this.eventoup = this.firestore.collection('eventos', ref => ref.where('up','array-contains',`${up_us}`).orderBy("UPnum" , "desc").limit(10))
      return this.eventoup.get().subscribe( upados =>{
        upados.forEach(Ups => {
          const data = Ups.data()
           const id = Ups.id
           if (data.fim < this.hjdia) {
            console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
            this.passadostate = this.firestore.doc(`eventos/${id}`)
            this.passadostate.update({
              passado: true
            })
          }
          moment.locale('pt-BR')
          this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
          data.dia = this.m 
          this.provUp1 = { id, ...data }
          this.y.push(this.provUp1)
         
          this.nextQueryUp = Ups
          console.log("this " , this.nextQueryUp)
         })
       
        })
        
    }
    listadeup2(user){
     const last =  this.nextQueryUp 
     console.log(last)
      this.eventoup2 = this.firestore.collection('eventos', ref => ref.where('up','array-contains',`${user}`).orderBy("UPnum" , "desc").startAfter(last).limit(10))
      return this.eventoup2.get().subscribe( upei => {
        upei.forEach(upi2 =>{
          const data = upi2.data()
          const id = upi2.id
          if (data.fim < this.hjdia) {
           console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
           this.passadostate = this.firestore.doc(`eventos/${id}`)
           this.passadostate.update({
             passado: true
           })
         }
         moment.locale('pt-BR')
         this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
         data.dia = this.m 
         this.provUp2 = { id, ...data }
         this.y2.push(this.provUp2)
         this.nextQueryUp = upi2
        })
      
    
        })
    
    }


    ngOnDestroy(){
      this.user.w = []
      this.user.w2 = []
      this.user.y = []
      this.user.w2 = []
    }  
}

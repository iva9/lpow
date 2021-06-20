import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AngularFireAuth  } from '@angular/fire/auth'
import { ProximoEventoPage } from '../eventos-do-usuario/proximo-evento.page';
import { Router } from '@angular/router';
import { EditarModalPage } from '../editar-modal/editar-modal.page'
import { LoadingController, ModalController } from'@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { EventomodalPage } from'../eventomodal/eventomodal.page';
import { AlertController } from '@ionic/angular';
import _ from 'lodash';
import * as moment from 'moment' 
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TutorialPage } from '../tutorial/tutorial.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
  hjdia = new Date().toISOString();
  item :string = ""
  items; 
  mainuser : AngularFirestoreDocument
  sub
  passadostate;
  m
  loading : any
  cidade : string = ""
  todositems;
  allitems;
  minhascidades;
   meulugar: string[] ;
  usuario;
  abrir: boolean = false;
  meuperfil ;
  perfilnome;
  perfilimg;
  perfilUP = false;
  ultimoUP;
  ultimoCriado;
  private criados = new Array<any>();
  private criados2 = new Array<any>() ;

  private ups = new Array<any>();
  private ups2 = new Array<any>();
  

  constructor( public afd : AngularFireDatabase,
    private editar : EditarModalPage,
    private firestore :AngularFirestore,
    public  user : UserService,
    public afAuth: AngularFireAuth,
    public proxEvento: ProximoEventoPage,
    public tutorial : TutorialPage,
    private modalCtrl : ModalController,
    private route : Router,
    private actionSheetCtrl: ActionSheetController,
    public alertController: AlertController,
    private loadingC : LoadingController,
    public eventModal : EventomodalPage,
    
    ) {
      this.dadosperfil()
  
   }

  async ngOnInit() {
    const res = await this.afAuth.currentUser
    this.usuario = res.uid
    this.getDataFromFire();
    this.user.listadecriados(res.uid)
    this.criados = this.user.w
    this.user.listadeup(res.uid)
    this.ups = this.user.y
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Configurações',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Tutorial',
          icon: 'help',
          handler: () => {
            this.showmodalTutorial();
          }
        },
     {
        text: 'Criar Evento',
        icon: 'add',
        handler: () => {
          this.route.navigate(['/add']);
        }
      }, {
        text: 'Editar perfil',
        icon: 'settings',
        handler: () => {
          this.showmodal();
        }
      },{
          text: 'Ordenar eventos por data/Up',
          icon: 'options',
          handler: () => {
            this.orderBy();
          }
      }, {
        text: 'Sair',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.logout()
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
  async presentLoading(){
    this.loading = await this.loadingC.create({
       cssClass: 'my-custom-class',
       message: 'Espere um momento...',
       duration: 2000
     });
     await this.loading.present();
    }
  async modalevento(zeta){
    const modal = await this.modalCtrl.create({
      component : EventomodalPage,
      componentProps:{
        customid :  zeta
      }
    })
    modal.present();;
    this.eventModal.criandomodal(zeta)
  }

  orderBy(){
    this.user.ordenar(this.usuario , this.perfilUP)
   }
  
   async showmodalTutorial(){
    const modal = await this.modalCtrl.create({
      component : TutorialPage,
      componentProps : {}
    })
    modal.present()
  }

  async dadosperfil(){
   const res = await this.afAuth.currentUser
  this.mainuser =   this.firestore.doc(`users/${res.uid}`)
  this.sub = this.mainuser.valueChanges().subscribe(usuario => {
    this.perfilnome = usuario.username
    this.perfilimg = usuario.imgUser
    this.perfilUP = usuario.UP
  })

  }
  async showmodal(){
    const modal = await this.modalCtrl.create({
      component : EditarModalPage,
      componentProps:{
         }
    })
    modal.present();;
    this.editar.criandomodal()
  }
  initializeItems() {
    this.items 
    console.log(this.items)
  }
  abriu(){
    this.abrir = !this.abrir
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.todositems = this.items
    this.allitems = this.todositems

    let val = ev.target.value;
    console.log(this.todositems)
    if ( val && val.trim() != ''){
      this.todositems = _.values(this.allitems);
      this.todositems = this.todositems.filter((cidade) => {
        return (cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
      }) 
    } else {
      this.todositems = this.allitems
    }
  }
  logout(){ 
    this.presentLoading()
      this.afAuth.signOut().then(function() {  // Sign-out successful.
  }).catch(function(error) {
    console.log(error)
    // An error happened.
  });    setTimeout(() => {  
  }, 3500);
  this.route.navigate(['/criar-user'])
  this.loadingC.dismiss()
  }
 

  loadups(event) { // scroll down (UPs)
    setTimeout(() => {
      console.log();
      if(this.ups2.length == 0 ){
        this.user.listadeup2(this.usuario)
          this.ups2 = this.user.y2 
          const uniqueUps2 = this.ups2.filter( function( elem, i, array ) {
            return array.indexOf( elem ) === i;
        } );   
        this.ups2 = uniqueUps2

    }
    event.target.complete();}, 2000);
  }
  
  loadcriados(event) { // scroll down (Criados)
    setTimeout(() => {
      console.log();
      if(this.criados2.length == 0 ){
      this.user.listadecriados2(this.usuario )
      this.criados2 = this.user.w2
    }
    event.target.complete();}, 2000);
  }

  getDataFromFire(){
    this.afd.list('cidades').valueChanges().subscribe(
      data =>{
        this.trataDados(data)
      }) 
  }
  trataDados(dados){
    this.items = Object.keys(dados).map(i => dados[i])
    this.todositems = this.items

     } 
     async meuslugares(item){
     var meulugar = item
       const res =  await this.afAuth.currentUser
       console.log(meulugar, "aki")
       this.firestore.collection(`users`).doc(`${res.uid}`).update({cidade: meulugar
       })
      this.afd.database.ref(`users/${res.uid}/cidade`).set(meulugar)
   
      this.route.navigate(['/home'])
        }

        async deletaract(rte) {const alert = await  this.alertController.create({
          header: 'Excluir Evento?',
         message: 'Esta ação não poderá ser desfeita',
          buttons: [ {
            text: 'Cancelar',
            handler: () => {
            }},
            {
              text: 'Confirmar',
              handler: () => {
                this.delete(rte)
              }},
            ]
        })
        await alert.present() 
        }
        delete(evento){
          this.firestore.collection("eventos").doc(`${evento.id}`).delete().then(function() {
            console.log("Document successfully deleted!");
        })
        this.afd.database.ref(`eventDetails/${evento.chave2}`).remove()
          console.log(evento.id)
        }

        ngOnDestroy(){
          console.log("Destroy perfil")
          this.user.w = []
          this.user.w2 = []
          this.user.y = []
          this.user.w2 = []
        }  

     }
    
    

        
      
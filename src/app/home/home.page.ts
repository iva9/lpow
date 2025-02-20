import { Component, ViewChild  , OnDestroy, ViewChildren} from '@angular/core';
import { EventoService } from '../evento.service';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { NovoEventoPage } from '../novo-evento/novo-evento.page';
import { AlertController, IonContent } from "@ionic/angular";
import { IonSlides} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EventomodalPage } from '../eventomodal/eventomodal.page';
import { ProximoEventoPage } from '../eventos-do-usuario/proximo-evento.page'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Data } from '../evento.service'
import { map } from 'rxjs/operators';
import { ActionSheetController } from '@ionic/angular'
//import * as firebase from 'firebase/firestore/bundle';
import * as moment from 'moment'
import { SimpleLoadingStrategy } from '../selective-loading-strategy.service';
import { PesquisarPage } from '../pesquisar/pesquisar.page';
import { LoginPage } from '../login/login.page';
import { CriarUserPage } from '../criar-user/criar-user.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import _ from 'lodash';
import { UserService } from '../user.service';
import { Camera } from '@ionic-native/camera'
import { TutorialPage } from '../tutorial/tutorial.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChildren('SwipedTabsSlider')
  @ViewChild(IonContent, { static: true }) content: IonContent;
  @ViewChildren('slides' )  slides: IonSlides;
  public nextcity(){
    this.slides.slideNext(800);
  }
  private eventocidade: AngularFirestoreCollection;
  private eventoNacional: AngularFirestoreCollection
  private eventoOnline: AngularFirestoreCollection
  conjunto;
  conjuntoNac;
  conjuntoOnl
  _cidade : string = ""
  hjdia = new Date().toISOString();
  passadostate: AngularFirestoreDocument;
  proximoseventos: Array<object> = [];
  day = true;
  numTimesLeft = 10;
  num = 10;
  items 

  public cidade2 = new Array<any>();
  public cidade3 = new Array<any>();
  public online = new Array<any>();
  public onlines = new Array<any>();
  public nacional = new Array<any>();
  public nacionais = new Array<any>();
  public cidade = new Array<any>();


  private eventosNacional: Subscription;
  private eventosNacional2: Subscription;
  private eventosdacidade: Subscription;
  private eventosdacidade2: Subscription;
  private eventosOnline: Subscription
  private eventosOnline2: Subscription


  modifieddata: any;
  nextQueryAfter //ultimo evento - cidade ;
  nextQuerynacional // ultimo evento - nacional
  nextQueryOnline // ultimo evento - nacional
  //postkey : AngularFireList<string>;
  Upboolean: Boolean = true;
  post;
  private userDOC: AngularFirestoreCollection;
  unique;
  escolhaNoAuth = " Cidade "
  allitems
  lugardouser;
  abrir
  lugar;
  ordenarpor = false; 
  iduser
  noAuth = false
  intruso :any
  todositems 
  noAuthCidade
  provCid1  // array provisorio lisata cidade
  provNac1  // array provisorio lisata nacional
  provOnl1 // array provisorio lista online;

  y = new Array<any>();
  z = new Array<any>();
  w = new Array<any>();

  lugarsin
  m;
  c;
  up;
  cidadesDoUsuario;
  updateReference: AngularFirestoreDocument;
  aloha: Object = '';

  number = 0;
  // public keys : Array<object> = [];
  constructor(
    public alertCtrl: AlertController,
    private login: LoginPage,
    private UserSe : UserService,
    public eventModal: EventomodalPage,
    private modalCtrl: ModalController,
    public firebase: AngularFireDatabase,
    private firestore: AngularFirestore,
    public service: EventoService,
    public authh: AngularFireAuth,
    private criaruserpage: CriarUserPage,
    public proxevent: ProximoEventoPage,
    private tutorial : TutorialPage,
    private route: Router,
    private SimpleLoad: SimpleLoadingStrategy,
    private backgroundMode: BackgroundMode
  ) {

    console.log(this.hjdia)
    
this.backgroundMode.disable()

    // this.eventosSubscription = this.service.getEventos().subscribe(data => {
    //this.eventos = data;
    // for (const index in this.eventos) {
    //moment.locale('pt-BR')
    //this.m = moment(this.eventos[index].dia).format('ddd DD MMM ')
    //this.eventos[index].dia = this.m
    // }
    //})
  }
  
  async ionViewDidEnter() {
    await this.SimpleLoad.preloadRoute('/pesquisar');
    await this.SimpleLoad.preloadRoute('/perfil');
    console.log("did enter __________________")
  }

  async ngOnInit() {
    this.cidade3 = new Array<any>(); //2° da cidade
    this.online = new Array<any>(); //1° do online
    this.onlines = new Array<any>();//2° do online
    this.nacional = new Array<any>(); //2° -> do nacional
    this.nacionais = new Array<any>(); //1° -> dos nacionais
    this.cidade = new Array<any>();//1° -> cidade
    
    this.showeventos()// eventos  msm com user deslogado 
    this.showDacidade()
    
    // ARRUMAR BUSCA NO NACIONAL (ESTA MOSTRANDO OS EVENTOS ONLINE TB)
  
  }
  ss(){
    
  this.nextcity()
}
  showeventos(){
    
    this.authh.onAuthStateChanged((user)=>{
      if (user) {    
 this.firestore.collection(`users`, ref => ref.where('iduser', '==', `${user.uid}`)).get().subscribe(using=>{
using.forEach( io =>{ 
  const order = io.data()
  const o = order.UP
  this.ordenarpor = o
  console.log(this.ordenarpor)
  if(this.nacionais.length == 0){
    this.eventosNacional = this.listanacional()//  ->  Nacional segment
    this.nacionais = this.w;
    console.log(this.nacionais , "--nacionais")

    if(this.online.length == 0){
      this.eventosOnline = this.listaonline()
      this.online = this.z//  ->  online segment  
      }
  
}})
 } )    
       
  
   
    }
  else{
    if(this.nacionais.length == 0){

      this.eventosNacional = this.listanacional()//  ->  Nacional segment
      this.nacionais = this.w;
  }

  if(this.online.length == 0){
    this.eventosOnline = this.listaonline()
    this.online = this.z//  ->  online segment  
    }
  
  }})
  }
  showDacidade(){
    this.authh.onAuthStateChanged((user)=>{
      if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/firebase.User
       var uid = user.uid;
       var res = user
       console.log( "logado por aqui")
       this.getcidadade(uid).subscribe(cit => {
        this.lugar = cit;
        if (this.lugar) {
          console.log(this.lugar)
          this.cidadesDoUsuario = this.lugar
          this.cidadedoUSER(this.cidadesDoUsuario)

        }


        // -> Cidade do usuario e Cidade segment
      })
      if (res.emailVerified == false) {
        console.log(res.emailVerified, "emailverified")
        // this.criaruserpage.showalert("Ops você já criou uma conta ", "Mas não clickou no link que enviamos, verifique e volte ")
        this.login.enviaremaildeverific()
      }
       // ...
     }
     else{
       this.AuthstateDeslogado()
     } 
   })
      
  }

  AuthstateLogado(user){
    const res = user
    this.iduser = res
    console.log("authstatelogado" , res.uid )

  }

  AuthstateDeslogado(){
     this.getDataFromFire()
     this.noAuth = true
    }
  
 
  

  getDataFromFire(){
    this.firebase.list('cidades').valueChanges().subscribe(
      data =>{
        this.trataDados(data)
      }) 
  }

  

  noAuth_cidade(item){
    this.abriu()
    this.mudouacidade(item)
    this.escolhaNoAuth = item
  }

  trataDados(dados){
    this.items = Object.keys(dados).map(i => dados[i])
    this.todositems = this.items
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
        this.todositems = this.todositems.filter((_cidade) => {
          return (_cidade.lugar.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
        }) 
      } else {
        this.todositems = this.allitems
      }
    }

  perfil() {
    this.scrollTop()
    if (this.cidadesDoUsuario) {
      this.eventosdacidade.unsubscribe();
    }
    this.eventosNacional.unsubscribe();
    this.eventosOnline.unsubscribe()
    if (this.eventosdacidade2) {
      this.eventosdacidade2.unsubscribe()
    }
    if (this.eventosOnline2) {
      this.eventosOnline2.unsubscribe()
    }
    if (this.eventosNacional2) {
      this.eventosNacional2.unsubscribe()
    }
    this.route.navigate(['/perfil'])
  }
  scrollTop() {
    this.content.scrollToTop(300)
  }
  async dadosperfil(){
    const res = await this.authh.currentUser
    if (res != null){
     this.getcidadade(res.uid)
     return false
    }
  else{
    return true
  }}
  
  getData(data) {
    var events = data.val()
    //  console.log(events)

  }
  async showmodal(zeta) {
    const modal = await this.modalCtrl.create({
      component: EventomodalPage,
      componentProps: {
        x :  zeta
      }
    })
    modal.present();;
    this.eventModal.criandomodal(zeta)
  }
  mudouacidade(item) {
    this.cidade = []
    this.y = []
    this.cidade3 = []
    console.log(this.cidade ,"mudou a cidade",item)
    this.cidadedoUSER(item)
    //console.log(this.cidade ,"mudou a cidade", this.cidade3)
  }

  // função eventos de up por dia hoje  só no Oreon V2
  //  async presentActionSheet() {
  //  const actionSheet = await this.actionSheetCtrl.create({ // botão "Oreon"
  //  header: 'Filtro',
  // cssClass: 'my-custom-class',
  // buttons: [

  //  {
  //text: 'Criar Evento', // -> cirar evento 
  //icon: 'add',
  // handler: () => {
  //   this.route.navigate(['/add'])
  // }
  //}, {
  //text: 'Cancel',
  //icon: 'close',
  //role: 'cancel',
  // handler: () => {
  // console.log('Cancel clicked');
  // }
  //}]
  //});
  //await actionSheet.present();
  //}

  getcidadade(user) {
    console.log("getcidade")
    this.userDOC = this.firestore.collection(`users`, ref => ref.where('iduser', '==', `${user}`))
    return this.userDOC.snapshotChanges().pipe(
      map(actions => {
        return actions.map(use => {
          const data = use.payload.doc.data().cidade;
          const order = use.payload.doc.data().UP
          this.ordenarpor = order
          if(this.ordenarpor == null){
            this.ordenarpor = false
          }
          //this.eventosNacional = this.listanacional()
         // this.nacionais = this.w

          //this.eventosOnline = this.listaonline()
          //this.online = this.z
          //console.log(this.ordenarpor ," ----------------------")
          //console.log(this.nacionais.length == 0)
    
          return data
        });
      })
    );
  }
   

  cidadedoUSER(dados) {
    this.cidade3 = []
    this.lugarsin = dados
    if(this.cidade.length == 0 && this.y.length == 0){
    this.eventosdacidade = this.listadaciadade(dados)//((data) => { // evento service -> get cidade do usuario 
    this.cidade = this.y
    }
  }
  listadaciadade(x) {

    if( this.ordenarpor == true){
      this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('dia', 'asc').limit(3))
    }
    if( this.ordenarpor == false){
      this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('UPnum', 'desc').limit(3))
    }
    
    return this.eventocidade.get().subscribe(coisas => {
      coisas.forEach(b => {
        const data = b.data()
        const id = b.id
        if (data.fim < this.hjdia) {
          //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
          this.passadostate = this.firestore.doc(`eventos/${id}`)
          this.passadostate.update({
            passado: true
          })
        }
        moment.locale('pt-BR')
        this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
        data.dia = this.m
        this.provCid1 = { id, ...data }
        this.y.push(this.provCid1)
        this.nextQueryAfter = b
  
      })

    })
    
  }
  
  listaonline() {
    if (this.ordenarpor == true){
      this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', `online`).where('passado', '==', false).orderBy('dia', 'asc').limit(2))
    }
    if(this.ordenarpor == false){
    this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', `online`).where('passado', '==', false).orderBy('UPnum', 'desc').limit(2))}
    return this.eventoOnline.get().subscribe(coisas => {
      coisas.forEach(o => {
        const data = o.data()
        const id = o.id
        if (data.fim < this.hjdia) {
          //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
          this.passadostate = this.firestore.doc(`eventos/${id}`)
          this.passadostate.update({
            passado: true
          })
        }
        moment.locale('pt-BR')
        this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
        data.dia = this.m
        this.provOnl1 = { id, ...data }
        this.z.push(this.provOnl1)
        this.nextQueryOnline = o
     
    })

  })
}
tamanho(){
  if(this.nacionais.length == 4){
  console.log("TAMANHO LENGHT ->",this.nacionais.length, this.nacionais)
  }
  if(this.nacionais.length == 2){
    console.log("esse" , this.iduser)
    this.getcidadade(this.iduser)
  }
}

  listanacional() {
   console.log(this.ordenarpor , "na nacional")
    if (this.ordenarpor == true){
      //console.log("true")
      this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('dia', 'asc').limit(3))
    }
    if (this.ordenarpor == false){
      //console.log("false")
    this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('UPnum', 'desc').limit(3))}
    return this.eventoNacional.get().subscribe(coisas => {
      coisas.forEach(n => {
        const data = n.data()
        const id = n.id
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
        this.provNac1 = { id, ...data }
        this.w.push(this.provNac1)
        this.nextQuerynacional = n
     
      })
    })

  }

  loadcidade(event) { // scroll down (Cidade)
    setTimeout(() => {

      this.num = 2
      if (this.cidade.length >= 1) {
        this.eventosdacidade2 = this.listadaciadade2(this.cidadesDoUsuario)
      }
      event.target.complete();
      //console.log(this.cidade3, "cidade3")
    }, 2000);
  }

  loadnacional(event) { // scroll down (nacional)
    setTimeout(() => {
      //console.log("chamei ele veio");
      this.num = 2
      if (this.nacionais.length >= 1) {
        this.eventosNacional2 = this.listanacional2()
      }

      event.target.complete();
    }, 2000);
  }

  loadOnline(event) {
    // scroll down (Online)
    setTimeout(() => {
      //console.log();
      this.num = 2
      if (this.online.length >= 1) {
        this.eventosOnline2 = this.listaonline2()
      }

      event.target.complete();
    }, 2000);
  }


  listadaciadade2(x) {
    if (this.ordenarpor == true){
      this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQueryAfter).limit(3))
    }
    if(this.ordenarpor == false){
    this.eventocidade = this.firestore.collection('eventos', ref => ref.where('lugar', '==', `${x}`).where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQueryAfter).limit(3))}
    return this.eventocidade.get().subscribe(city => {
      city.forEach(a => {
        const data = a.data();
        const id = a.id;
        if (data.fim < this.hjdia) {
          //console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
          this.passadostate = this.firestore.doc(`eventos/${id}`)
          this.passadostate.update({
            passado: true
          })
        }
        moment.locale('pt-BR')
        this.m = moment(data.dia).format('ddd DD MMM - HH:mm') // passa data para o Português
        data.dia = this.m
        this.nextQueryAfter = a // ultimo evento para o infinite scroll
        this.conjunto = { id, ...data }
        this.cidade3.push(this.conjunto)
        const numeros = this.cidade3
        // concertar o bug da repetição 
        const uniqueAddresses = Array.from(new Set(numeros.map((a) => a.id)))
          .map(id => {
            return numeros.find((a) => a.id === id)
          })
        //não repete eventos (bug)
        this.cidade3 = uniqueAddresses

        return { id, ...data };
      })
    })


  }

  listanacional2() {
    //console.log("nacional chamado")
    if (this.ordenarpor == true){
      this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQuerynacional).limit(3))
    }
    if(this.ordenarpor == false){
    this.eventoNacional = this.firestore.collection('eventos', ref => ref.where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQuerynacional).limit(3))}
    return this.eventoNacional.get().subscribe(ncaionais2 => {
      ncaionais2.forEach(a => {
        const data = a.data();
        const id = a.id;
        if (data.fim < this.hjdia) { // checar se data do  evento esta no futuro
          this.passadostate = this.firestore.doc(`eventos/${id}`)
          this.passadostate.update({
            passado: true
          })
        }
        moment.locale('pt-BR')
        this.m = moment(data.dia).format('ddd DD MMM - HH:mm') // passa data para o Português
        data.dia = this.m
        this.nextQuerynacional = a // ultimo evento para o infinite scroll
        this.conjuntoNac = { id, ...data }
        this.nacional.push(this.conjuntoNac)
        const numeross = this.nacional
        // concertar o bug da repetição 
        const uniqueAddressesNac = Array.from(new Set(numeross.map((a) => a.id)))
          .map(id => {
            return numeross.find((a) => a.id === id)
          })
        //não repete eventos (bug)
        this.nacional = uniqueAddressesNac
        //console.log(this.nacional)

        return { id, ...data };
      })
    })


  }

  async ajuda(){
    const modal = await this.modalCtrl.create({
      component: TutorialPage,
      componentProps: {
    
      }
    })
    modal.present();;

  }

  listaonline2() {
    if (this.ordenarpor == true){
      this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', 'online').where('passado', '==', false).orderBy('dia', 'asc').startAfter(this.nextQueryOnline).limit(3))
    }
    if(this.ordenarpor == false){
    this.eventoOnline = this.firestore.collection('eventos', ref => ref.where('online', '==', 'online').where('passado', '==', false).orderBy('UPnum', 'desc').startAfter(this.nextQueryOnline).limit(3))}
    return this.eventoOnline.get().subscribe(onlines => {
      onlines.forEach(t => {
        const data = t.data();
        const id = t.id;
        if (data.fim < this.hjdia) { // checar se data do  evento esta no futuro
          this.passadostate = this.firestore.doc(`eventos/${id}`)
          this.passadostate.update({
            passado: true
          })
        }
        moment.locale('pt-BR')
        this.m = moment(data.dia).format('ddd DD MMM - HH:mm') // passa data para o Português
        data.dia = this.m
        this.nextQueryOnline = t // ultimo evento para o infinite scroll
        this.conjuntoOnl = { id, ...data }
        this.onlines.push(this.conjuntoOnl)
        const nume = this.onlines
        // concertar o bug da repetição 
        const uniqueAddressesOnl = Array.from(new Set(nume.map((ad) => ad.id)))
          .map(id => {
            return nume.find((yd) => yd.id === id)
          })
        //não repete eventos (bug)
        this.onlines = uniqueAddressesOnl

        return { id, ...data };
      })
    })



  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  //ORDENAR SEM TAR LOGADO (DIA/UP)
  //async optionsNoAuth(){
   // const alert = await this.alertCtrl.create({
    //  cssClass: 'my-custom-class',
     // header: 'Ajuste de Listas',
     // message: 'Deseja ordenar os eventos por',
     // buttons: [
      //  {
       //   text: 'Dia',
        //  role: 'cancel',
       //   cssClass: 'secondary',
        //  handler: () => {
        //    console.log("dia")
         //   this.ordenarpor = true
       //     this.ngOnInit()           
        //  }
   //     },
     //   {
       //   text: 'Up',
         // role: 'cancel',
       //   cssClass: 'secondary',
     //     handler: () => {
   //         this.ordenarpor = true
         //   console.log("up")
          //  this.ngOnInit()
        //  }
       // }, {
       //   text: 'Cancelar',
      //    handler: () => {
           // console.log('Confirm Okay');
         // }
       // }
     // ]
   // });

 //   await alert.present();
 // }





  //hoje(x) { // refeito precisa ser 
  //this.eventodehoje = this.firestore.collection('eventos', ref => ref
  // .where('lugar', '==', `${x}`).where('passado', '==', false)
  // .where('dia', '>=', `${this.hjdia}`)
  //.orderBy('dia')
  //.orderBy('up')
  //.startAfter(this.nextQueryAfter.payload.doc)
  //.limit(1))
  // return this.eventodehoje.snapshotChanges(['added']).pipe(
  //  map(actions => {
  //  return actions.map(a => {
  //  const data = a.payload.doc.data();
  //const id = a.payload.doc.id;
  // if (data.dia < this.hjdia) {
  //  this.passadostate = this.firestore.doc(`eventos/${id}`)
  // this.passadostate.update({
  //  passado: true
  //})
  //}
  // moment.locale('pt-BR')
  //  this.m = moment(data.dia).format('ddd DD MMM ')
  //    data.dia = this.m
  //      this.nextQueryAfter = a
  //this.conjunto = { id, ...data }
  // this.cidade3.push(this.conjunto)
  //   return { id, ...data };
  //   })
  //    })
  // )

  //  }
  ngOnDestroy() {
    console.log('_________________destruiu home ______________')
    // concertando bug troca de ordem
    this.cidade3 = new Array<any>(); //2° da cidade
    this.online = new Array<any>(); //1° do online
    this.onlines = new Array<any>();//2° do online
    this.nacional = new Array<any>(); //2° -> do nacional
    this.nacionais = new Array<any>(); //1° -> dos nacionais
    this.cidade = new Array<any>();//1° -> cidade
    this.y = new Array<any>();
    this.z = new Array<any>();
    this.w = new Array<any>();
  }
}

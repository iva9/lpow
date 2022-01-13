import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { FirebaseListObservable } from '';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventocolection : AngularFirestoreCollection;
  private eventocidade : AngularFirestoreCollection;
  eventDetailListRealtime: AngularFireList<any>;
  eventDetailList: AngularFirestoreCollection;
  filelist: any[];
  dataSet: Data = {
    nome: '', //nome do evento
    url: '', // imagem
    ingresso: "",// link ingresso
    dia: '', //data do evento
    fim : '', // data do fim do evento
    local:'',//local do evento
    lugar:'',//cidade do evento para controle de listas
    up:[],
    userID:[],
    UPnum: 0
  };
  dataSet2: Data2 ={
    nome:'',
    url: '', // imagem
    ingresso: "",// link ingresso
    dia: '', //data do evento
    fim : '', //data do fim do evento
    local:'',//local do evento
    lugar:'',//cidade do evento para controle de listas
    up:[],
    userID:[],
    chave2:'',
    passado : false,
    UPnum: 0
  }
  dataSet3: Data3 = {
    online : 'online',
    nome :'',
    url : '',
    link : '',
    dia : '',
    fim : '',
    up:[],
    userID:[],
    chave2:'',
    passado : false,
    UPnum: 0
  }
  dataSet4: Data4 = {
   online : 'online',
    nome :'',
    url : '',
    link : '',
    dia : '',
    fim : '',
    up:[],
    passado : false,
    userID:[],
    UPnum: 0,
  }

  items;
  cidade;
  cida
  keydb2
  userID;
  msg: string = 'error';
  eventocidade2

  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase ,
   private firestore : AngularFirestore,
    private auth : AngularFireAuth ) {


 this.eventocolection = this.firestore.collection('eventos', ref => ref.orderBy('up' , 'desc'))

 this.eventocidade = this.firestore.collection('eventos', ref => ref.orderBy('up' , 'desc').where('lugar','==',`Brasilia`))
  }
//this.test = this.firestore.collection<Data>('eventos' , ref => ref.where('lugar ','==' ,`${this.cidadesDoUsuario[0].item}`).orderBy('up').limit(20))
  getImageDetailList() {
   this.eventDetailListRealtime = this.firebase.list('eventDetails');
   this.eventDetailList = this.firestore.collection('eventos')
  }


  async insertImageDetails(nome, url, ingresso, dia, fim, local , lugar, ) {//inserindo eventos id= nome , url = Imagem , ingresso = link , dia = dia do evento 
    const res = await this.auth.currentUser;
    this.dataSet = {
      nome: nome,
      url: url,
      ingresso: ingresso,
      dia: dia,
      fim : fim,
      local: local,
      lugar:lugar,
      up:[res.uid],
      userID : [res.uid , res.displayName],
      UPnum: 1
    }; 

  await  this.eventDetailListRealtime.push(this.dataSet).then( result =>{
      console.log(result.key)
      var chave = result.key;
      this.keydb2 =  chave
      var dataseet = this.dataSet
       this.firebase.database.ref(`eventDetails/${result.key}/`).set({chave , dataseet } )

   })
   this.dataSet2 = {
    nome: nome,
    url: url,
    ingresso: ingresso,
    dia: dia,
    fim : fim,
    local: local,
    lugar:lugar,
    up:[res.uid],
    userID :  [res.uid , res.displayName],
    chave2 : this.keydb2,
    passado : false,
    UPnum: 1,
  }; 
  await  this.eventDetailList.add(this.dataSet2)
  }

  //----------------------------------------------------------------------------------------------//
async  insertOnline(nome , url , link ,dia ,fim){// evento online
  const res = await this.auth.currentUser;
  this.dataSet4 = { // evento no Realtime Database
    online : 'online',
    nome : nome,
    url : url,
    link : link,
    dia : dia,
    fim : fim,
    passado : false,
    up: [res.uid],
    userID:  [res.uid , res.displayName],
    UPnum: 1,
  }
  await  this.eventDetailListRealtime.push(this.dataSet4).then( result =>{
    console.log(result.key)
    var chave = result.key;
    this.keydb2 =  chave
    var dataseet = this.dataSet4
     this.firebase.database.ref(`eventDetails/${result.key}/`).set({chave , dataseet } )
 })


    this.dataSet3 = {  // evento no Firestore
      online : 'online',
      nome : nome,
      url : url,
      link : link,
      dia : dia,
      fim : fim,
      up: [res.uid],
      userID:  [res.uid , res.displayName],
      chave2: this.keydb2,
      passado : false,
      UPnum: 1
    }
    await  this.eventDetailList.add(this.dataSet3)
  }
  getEventos() {  // Get the last visible document

    
   // return this.eventocolection.snapshotChanges((['added'])).pipe(
   //   map(actions => {
     //   return actions.map(a => {
       //   const data = a.payload.doc.data();
         // const id = a.payload.doc.id;

          //return { id, ...data };
       // });
     // })
    //) 
  } 
  

}
export interface Data { // evento Presencial no DB2 - RealtimeDatabase
  nome: string,
  url: string,
  ingresso: string,
  dia: string,
  fim: string,
  local: string,
  lugar:string
  up:Array<any>,
  userID:Array<any>,
  UPnum:number
}
export interface Data2 {// evento Presencial no DB1 - Firestore
  nome: string,
  url: string,
  ingresso: string,
  dia: string,
  fim: string,
  local: string,
  lugar:string
  up:Array<any>,
  userID:Array<any>,
  chave2:string,
  passado : boolean,
  UPnum:number
}
export interface Data3 { // evento Online no DB1 - Firestore
  online : string,
  nome: string,
  url: string,
  link: string,
  dia: string,
  fim: string,
  up:Array<any>,
  userID:Array<any>,
  chave2:string,
  passado : boolean,
  UPnum:number
}
export interface Data4 {// evento Online no DB2 - RealtimeDatabase
  online : string,
  nome: string,
  passado : boolean,
  url: string,
  link: string,
  dia: string,
  fim : string,
  up:Array<any>,
  userID:Array<any>,
  UPnum:number
}

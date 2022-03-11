import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import {  CidadeService } from '../cidades.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize, map } from 'rxjs/operators';
import { EventoService } from '../evento.service';
import { IonSlides} from '@ionic/angular';
import { AngularFireDatabase  , AngularFireList} from '@angular/fire/database'
import { Environment,  Geocoder  } from '@ionic-native/google-maps'
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import * as moment from 'moment'
import { AlertController } from '@ionic/angular';
import { LoadingController , ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera ,CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx'
import { EditarModalPage } from '../editar-modal/editar-modal.page'
import { IonDatetime } from '@ionic/angular';
import { Data2 } from '../evento.service'
import { error } from 'console';
import firebase from 'firebase';
import { type } from 'os';
import { ElementFinder } from 'protractor';


declare var google : any;


@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.page.html',
  styleUrls: ['./novo-evento.page.scss'],

})

export class NovoEventoPage implements OnInit {
  @ViewChild('fileButton' ,  {static: false}) fileButton;
  @ViewChild('slides' ,{static: false})  slides: IonSlides;

  @ViewChild('iondatetime', {static: false}) datetime: IonDatetime;

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
    passado : false,
    UPnum: 0
  }
  

  public close() {
    //this.datetime.cancel(true)
  }

  public select(){
    //this.datetime.confirm(true)
    console.log(this.dateValue)
  }
  
  public next(){
    this.slides.slideNext();
  }
  public prev(){
    this.slides.slidePrev();
  }
; eventDetailListRealtime: AngularFireList<any>;
  keydb2
  ref
  loading : any;
  img 
  selectedImage: any = null;
  items;
  presenca = true
  fim
  dateValue = '';
  dia1 = 'Início'
  dia2 = 'Fim'
  usuario
  ingressoType = ''
  existe : boolean = false
  url: string ;
  nome: string;
  link: string;
  ingresso: string;
  options = { month: 'long', day: 'numeric',
  year: 'numeric' };
  dia //= new Date().toLocaleDateString('en-GB' , this.options);
  public destnation : any;
  public lugar : any;
  hide : boolean = true
  local: any ;
  public tipo = "Presencial"
  public search : string = '';
  private googleAutocomplete = new google.maps.places.AutocompleteService();
  public searchResults = new Array<any>();
  
 geostring
 

       constructor(@Inject(AngularFireStorage) 
        private storage : AngularFireStorage , @Inject(EventoService) 
        public camera : Camera,
       private eventoService: EventoService ,
       private firestore :AngularFirestore,
       private modalCtrl : ModalController,
       public firebase : AngularFireDatabase,
       private ngzone: NgZone,
       private geo: NativeGeocoder,
       public alert: AlertController,
       private auth: AngularFireAuth ,
       private loadingC : LoadingController,
       )
        {  }

  ngOnInit() {
   
    this.eventoService.getImageDetailList(); 
    this.img = "../assets/icon/unnamed.png";
    this.getCidadeDetails();
    this.name()
  } 
  getCidadeDetails(){
    this.firebase.list('cidades').valueChanges().subscribe(
       data =>{ this.tratacidades(data)
     })
       }
       tratacidades(dados){
         this.items = Object.keys(dados).map(i => dados[i])  
         console.log(this.items,"todas as city")
       }

 novaData(){
  this.next()
  moment.locale('pt-BR')
  this.dia2 = moment(this.dia).format('ddd DD MMM')
 }


geocodetest(resukt , localcompleto){
  console.log(resukt , "opa")
  this.search = "";
  this.local = localcompleto




  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 1
};

  this.geo.forwardGeocode(resukt , options).then( res => {(res)
    console.log(res)
  this.lugar = res[0].locality
  console.log(this.lugar)
  if (this.lugar == "Brasília"){
    console.log("ok")
  }
  else if(this.lugar == "Rio de Janeiro"){
    console.log("ok")
  }
  else if(this.lugar == "São Paulo"){
    console.log("ok")
  }
  else{
      this.search , this.local = ""
      return this.showalert("Ops!" , "O Oreon só está disponivel em Brasília, Rio de Janeiro e São paulo")
    }
  console.log(this.lugar)
  return  this.lugar ;   



  }).catch(err => {console.log(err)
    var re1 = /Rio de Janeiro/gi;
    var re2 = /Brasília/gi;
    var re3 = /São Paulo/gi;
    if(this.local.description.search(re1) == -1 ){
      this.lugar = "Rio de Janeiro"
      console.log("ok")
    }
    else if(this.local.description.search(re2) == -1){
      this.lugar = "Brasília"
      console.log("ok")
    }
    else if(this.local.description.search(re3) == -1){
      this.lugar = "São Paulo"
      console.log("ok")
    }
    else{
      return this.showalert("Ops!" , "O Oreon só está disponivel em Brasília, Rio de Janeiro e São paulo")
    }
  
  })
 
}

 Presencial(){
   this.next()
  
  }
pres(){
  this.next()
}
Online(){
  console.log("online")
  this.presenca = false
  this.local = null
  this.lugar = null
  this.next()
}
dateChanged(value){
  this.dia = value
  moment.locale('pt-BR')
  this.dia1 = moment(this.dia).format('ddd DD MMM HH:MM')
  console.log(value)
}
dateChanged2(value){
  this.fim = value
  moment.locale('pt-BR')
  this.dia2 = moment(this.fim).format('ddd DD MMM HH:MM')
  console.log(value)
}

async showmodal(){
  const modal = await this.modalCtrl.create({
    component : EditarModalPage,
    componentProps:{
       }
  })
  modal.present();;
}

async name(){
  const res = (await this.auth.currentUser)
  this.usuario = res
}
  save(){
    if (this.presenca == true){
    this.presentLoading()
    if(this.nome == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    if(this.local == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Local do evento é Obrigatório")
    }
    if(this.ingresso == null){
      this.loading.dismiss()
      console.log(this.ingresso)
      return  this.showalert("Erro " , "Link do evento é Obrigatório, caso o evento não possua link de ingresso use o link de perfil do instagram do evento ou do produtor.")
    }
      this.provisorio()
      this.showalert("Evento " , "Publicado com sucesso")
      this.loading.dismiss()
    }




    if (this.presenca == false) {
      this.presentLoading()
    if(this.nome == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    if(this.link == null){
      this.loading.dismiss()
      return  this.showalert("Erro " , "Link do evento é Obrigatório")
    }
    this.provsorioOnline()
    this.showalert("Evento " , "Publicado com sucesso")
  
    this.loading.dismiss()
    }
  }
    showPreview(event: any){
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.img = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
        console.log(this.selectedImage.size)
        if(this.selectedImage.size > 500000){
          this.img = "../assets/icon/profile.png";
          this.selectedImage = null;
          return this.showalert("Erro" , "tamanho da imagem muito grande, reduza para no máximo 500 KB ")
        }
        this.next()
      }else{
        this.img = "../assets/icon/profile.png";
        this.selectedImage = null;
      }
    }
    writeUserData( ){
      this.fileButton.nativeElement.click()
   }
  save2(){
    this.presentLoading()
    if(this.nome == null){
      return  this.showalert("Erro " , "Nome do evento é Obrigatório")
    }
    if(this.selectedImage == null){
      return  this.showalert("Erro " , "Imagem do evento é Obrigatório")
    }
    if(this.dia == null){
      return  this.showalert("Erro " , "Data de ínicio do evento é Obrigatório")
    }
    if(this.fim == null){
      return  this.showalert("Erro " , "Data de fim do evento é Obrigatório")
    }
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.eventoService.insertOnline(this.nome,this.url, this.link, this.dia,this.fim);                   
          this.showalert("Evento" , "Publicado com sucesso ")
        })
      })
    ).subscribe();

    this.loading.dismiss()
}
  searchChanged(){
    if (!this.search.trim().length )  return;
     this.googleAutocomplete.getPlacePredictions( {  input: this.search ,  },  predictions => {
       this.ngzone.run(() =>{
        this.searchResults = predictions
       })
      

})}
async showalert(header : string , message: string){
  const alert = await  this.alert.create({
    header,
    message,
    buttons: ["Ok"]
  })
  await alert.present() 
}
nextlocal(){
  this.next()
  console.log(this.lugar)
}

async showalert2(header : string , message: string , x ,y){
  const alert = await  this.alert.create({
    header,
    message,
    buttons: [{
      text: 'OK',
      
      handler: () => {
        this.provs()
      }
  }]})
  await alert.present() 
}
 async localizou(item: any){
    this.search = "";
    this.local = item
    this.destnation = item    
   const info : any = await  Geocoder.geocode( {address: this.destnation.description } );
    this.lugar = info[0].subAdminArea;
    if (info[0].adminArea == "Distrito Federal"){
      this.lugar = "Brasília"
    }
    if (this.lugar == "Brasília"){
      console.log("ok")
    }
    else if(this.lugar == "Rio de Janeiro"){
      console.log("ok")
    }
    else if(this.lugar == "São Paulo"){
      console.log("ok")
    }
    else{
        this.lugar , this.local = ""
        return this.showalert("Ops!" , "O Oreon só esta disponivel em Brasília, Rio de Janeiro e São paulo")
      }
    console.log(this.lugar)
    return this.local , this.lugar ;   
  }
  load(){
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCXYp8zsb8GG0_kfoc_tajVU_3UNyFiEZE',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCXYp8zsb8GG0_kfoc_tajVU_3UNyFiEZE'
  });
}
async presentLoading(){
 this.loading = await this.loadingC.create({
    cssClass: 'my-custom-class',
    message: 'Espere um momento...',
    duration: 2000
    
  });
  await this.loading.present();
} 
 provs(){
   this.provs1()
   this.provs2()
   this.provs3()
   this.provs4()
   this.provs5()
   this.provs6()
 }

 provsOnline(){
  this.provs1()
  this.provs2()
  this.provs3()
  this.provs4()
  this.provs6()
 }
async provs1( ){
  console.log("provs")

const res = await this.auth.currentUser;
  const ref = this.firestore.collection('eventos').doc(this.ref) 
  ref.update({  up : [res.uid ] })
}
async provs2( ){


const res = await this.auth.currentUser;
  const ref = this.firestore.collection('eventos').doc(this.ref) 
  ref.update({  userID : [res.uid , res.displayName] })
}
 provs3( ){



  const ref = this.firestore.collection('eventos').doc(this.ref) 
  ref.update({  dia : this.dia}).catch(error => {
    console.log(error)
    return this.showalert("Error" , "Algo deu errado")
  })
}
 provs4( ){
  console.log("provs4")


  const ref = this.firestore.collection('eventos').doc(this.ref) 
  ref.update({  fim : this.fim}).catch(error => {
    console.log(error)
    return this.showalert("Error" , "Algo deu errado")
  })

}

provs5(){
   
  const ref = this.firestore.collection('eventos').doc(this.ref) 
  ref.update({  lugar : this.lugar})

}
provs6(){
  const ref = this.firestore.collection('eventos').doc(this.ref) 

  var name = this.selectedImage.name;
  const fileRef = this.storage.ref(name);

  this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        ref.update({  url : url})
        ;})})).subscribe()
  
}


  provisorio(){
    this.presentLoading()
  console.log("tamanho?")
  var name = this.selectedImage.name;
  var add =  this.firestore.createId()
  this.ref = add
  console.log(add)
   const ref = this.firestore.collection('eventos').doc(add) 


  const  nome = this.nome

 const ingresso = this.ingresso //link

 const   local = this.local

 
 const  passado = false
 const  UPnum = 1
  
   
  
 this.firestore.collection('eventos').doc(add).set({nome , local , UPnum  , ingresso , passado   }).catch(error =>{
   return this.showalert("Error" , "Tente novamente mais tarde")
 });

this.provs()
console.log("ok publicado")

this.loadingC.dismiss()
 }
 provsorioOnline(){
  this.presentLoading()
  console.log("tamanho?")
  var name = this.selectedImage.name;
  var add =  this.firestore.createId()
  this.ref = add
  console.log(add)
   const ref = this.firestore.collection('eventos').doc(add) 


  const  nome = this.nome

 const ingresso = this.link //link

 
 const  passado = false
 const  UPnum = 1
  
 console.log(nome)
 console.log(ingresso)
  
 console.log(UPnum)
 console.log(passado)
   
  
 this.firestore.collection('eventos').doc(add).set({nome  , UPnum  , ingresso , passado}).catch(error =>{
   console.log(error)
   return this.showalert("Error" , "Tente novamente mais tarde")
 });

this.provsOnline()
console.log("ok publicado")

this.showalert("ok", "publicado" )
this.loadingC.dismiss()
 
 }



editNome(){
  this.prev()
  this.prev()
  this.prev()
  this.prev()
}
editDia(){
  this.prev()
  this.prev()
  this.prev()
}
editIngresso(){
  this.prev()
  this.prev()
}
editLink(){
  this.prev()
  this.prev()
}
editLocal(){
  this.prev()
}


}
import { Component, OnInit, Inject, NgZone, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {  CidadeService } from '../cidades.service';
import { finalize } from 'rxjs/operators';
import { EventoService } from '../evento.service';
import { IonSlides} from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database'
import { Environment,  Geocoder  } from '@ionic-native/google-maps'
import * as moment from 'moment'
import { AlertController } from '@ionic/angular';
import { LoadingController , ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Camera ,CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx'
import { EditarModalPage } from '../editar-modal/editar-modal.page'
declare var google : any;


@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.page.html',
  styleUrls: ['./novo-evento.page.scss'],

})

export class NovoEventoPage implements OnInit {
  @ViewChild('fileButton' ,  {static: false}) fileButton;
  @ViewChild('slides' ,{static: false})  slides: IonSlides;
  public next(){
    this.slides.slideNext();
  }
  public prev(){
    this.slides.slidePrev();
  }
  loading : any;
  img 
  selectedImage: any = null;
  items;
  presenca = true
  fim
  dia2
  usuario
  ingressoType = ''
  existe : boolean = false
  url: string;
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
 
 

       constructor(@Inject(AngularFireStorage) 
        private storage : AngularFireStorage , @Inject(EventoService) 
        public camera : Camera,
       private eventoService: EventoService ,
      
       private modalCtrl : ModalController,
       public firebase : AngularFireDatabase,
       private ngzone: NgZone,
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


 Presencial(){
  if(this.usuario == "Usuario"){
     this.showalert("OPS!", "Mude seu nome de usuario para publicar um evento")
   return  this.showmodal()
  }
  this.presenca = true
  this.next()
}
Online(){
  if(this.usuario == "Usuario"){
    this.showalert("OPS!", "Mude seu nome de usuario para publicar um evento")
   return this.showmodal()
 }
  this.presenca = false
  this.local = null
  this.lugar = null
  this.next()
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
  const res = (await this.auth.currentUser).displayName
  this.usuario = res
}
  save(){
    if (this.presenca == true){
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
    if(this.local == null){
      return  this.showalert("Erro " , "Local do evento é Obrigatório")
    }
    if(this.ingresso == null){
      console.log(this.ingresso)
      return  this.showalert("Erro " , "Link do evento é Obrigatório, caso o evento não possua link de ingresso use o link de perfil do instagram do evento ou do produtor.")
    }
      var name = this.selectedImage.name;
      const fileRef = this.storage.ref(name);
      this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.url = url;
            
            this.eventoService.insertImageDetails(this.nome,this.url, this.ingresso, this.dia,this.fim, this.local ,this.lugar);
            if( this.items.some( cidade => (cidade.lugar == this.lugar)) ){
               console.log("cidade" ,"ja existente")
               this.loading.dismiss()
               this.showalert("Evento " , "Publicado com sucesso")
            } else {
              var lugar = this.lugar
              this.firebase.list('cidades').push({
                lugar
              })} 
           ;
          })
          
        })
      ).subscribe();
      this.loading.dismiss()
      this.showalert("Evento " , "Publicado com sucesso")
    }
    if (this.presenca == false) {
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
    if(this.link == null){
      return  this.showalert("Erro " , "Link do evento é Obrigatório")
    }
    var name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.eventoService.insertOnline(this.nome,this.url, this.link, this.dia,this.fim);  
          this.loading.dismiss()
          this.showalert("Evento " , "Publicado com sucesso")                 
        })
      })
    ).subscribe();
  

    }
  }
    showPreview(event: any){
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.img = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
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
    this.showalert("Evento " , "Publicado com sucesso")
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
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyClABG0SXj9mDIMW-nZBBKoIaGscHBHoyo'
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
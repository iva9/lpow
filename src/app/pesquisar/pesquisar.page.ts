import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import _ from 'lodash';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { EventomodalPage } from '../eventomodal/eventomodal.page';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
 usuario;
  public eventolist: any;
 eventoY;
 alleventos :  any;
  allusuarios: any;
  queryText: string;
  users;
  userID;
  eventoID;
  eventos;

  constructor( public fd :  AngularFireDatabase ,
    private firestore : AngularFirestore,
     private router : Router,
     private modalCtrl : ModalController,
     private eventModal : EventomodalPage) { 
    this.queryText ='';
    console.log("pré LoAD")

  }
    
  ngOnInit() {

    this.eventosDB()
    console.log("pré LoAD")
    this.initializeitems()
  }
  
  async modalevento(zeta){
    const modal = await this.modalCtrl.create({
      component : EventomodalPage,
      componentProps:{
        x :  zeta
      }
    })
    modal.present();;
    this.eventModal.criandomodal(zeta)
  }

     eventosDB(){
      this.fd.list('eventDetails').valueChanges().subscribe(
        data =>{
        this.trataEventos(data)
        }
      )
     }
     trataEventos(even){
      this.eventos = Object.keys(even).map(i => even[i])
     
     }
  
  filterEvento(cid: any){
    this.eventoY= this.eventos
    this.alleventos = this.eventoY



    let val = cid.target.value;
    if( val && val.trim() != ''){
      this.eventoY = _.values(this.alleventos);
      this.eventoY = this.eventoY.filter((evento) => {
        return (evento.dataseet.nome.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
      }) 
  }
}


voltar(){
  this.router.navigate(['./home'])
}


initializeitems(){

  const eventoslist = this.firestore.collection('eventos' , ref=> ref.limit(7)).valueChanges().pipe((first())).toPromise()
  return eventoslist

}

async filterlist(evt):Promise<any> {
  this.eventolist = await this.initializeitems()
  const searchtemrs = evt.srcElement.value

  if(!searchtemrs){
    return

  }
 
   
  this.eventolist = this.eventolist.filter(currentevento =>{
    if(currentevento.nome && searchtemrs) {
            return (currentevento.nome.toLowerCase().indexOf(searchtemrs.toLowerCase())  > -1  )
    }
  })

}

pesq(evento){
  // lugar , url , nome , chave
  this.eventoID = evento.chave
  this.router.navigate(['/evento-pesquisa/' + this.eventoID])
}
}
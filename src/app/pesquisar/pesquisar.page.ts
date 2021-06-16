import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import _ from 'lodash';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {
 usuario;
 eventoY;
 alleventos :  any;
  allusuarios: any;
  queryText: string;
  users;
  userID;
  eventoID;
  eventos;

  constructor( public fd :  AngularFireDatabase , private auth : AngularFireAuth , private firestore : AngularFirestore, private router : Router) { 
    this.queryText ='';
    console.log("pré LoAD")

  }
    
  ngOnInit() {

    this.eventosDB()
    console.log("pré LoAD")
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



pesq(evento){
  this.eventoID = evento.chave
  this.router.navigate(['/evento-pesquisa/' + this.eventoID])
}
}
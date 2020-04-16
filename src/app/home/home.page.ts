import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  eventos = [
    { nome: 'Ivanov', local: 'Lago-noRTE', Link: 'https://www.youtube.com/watch?v=inACT49PIPc', },
    { nome: 'Maria', local: 'asa-noRTE', Link: 'https://www.youtube.com' },
  ]
  contatosdb = []
  constructor(
    public http: Http
  ) {
    this.pegarDadosFirebase();  
  }

pegarDadosFirebase(){
 // this.http.get('https://oreon-4bfc2.firebaseio.com/eventos.json')
 // .map(res => res).subscribe(data =>{
   // console.log(data, 'dados  do Firebase');
  }
  

}


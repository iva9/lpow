import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  cidade: AngularFireList<any>;
  key;
  a;
  items;
  constructor(private firebase: AngularFireDatabase) {
    this.getCidadeDetails()
   }
   getCidadeDetails(){
    this.firebase.list('cidades').valueChanges().subscribe(
       data =>{ this.tratacidades(data)
     })
       }
    
       tratacidades(dados){
         this.items = Object.keys(dados).map(i => dados[i])  
       }
}
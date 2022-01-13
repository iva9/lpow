import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database'
import { map } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proximo-evento',
  templateUrl: './proximo-evento.page.html',
  styleUrls: ['./proximo-evento.page.scss'],
})
export class ProximoEventoPage implements OnInit {
  private eventocriado : AngularFirestoreCollection;
  private eventoup : AngularFirestoreCollection;
  public criados = new Array<any>();
  uid;
  public ups = new Array<any>();
  constructor( private auth : AngularFireAuth ,private firestore : AngularFirestore ,private firebase :AngularFireDatabase) {
   
   
   }

async  ngOnInit() {  
  const res =  await this.auth.currentUser
  console.log(res.uid)
  
 this.listadecriados(res.uid).subscribe(data => {
  this.criados = data;
  });

  }
  
  listadecriados(cria){
  //console.log(cria)
  this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID','==',`${cria}`))
   return this.eventocriado.snapshotChanges((['added'])).pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
        

          return {  ...data };
        });
      })
    );
    

  }
 
  delete(evento){
    this.firestore.collection("eventos").doc(`${evento.id}`).delete().then(function() {
      console.log("Document successfully deleted!");
  })
  this.firebase.database.ref(`eventDetails/${evento.chave2}`).remove()
    console.log(evento.id)
  }
}

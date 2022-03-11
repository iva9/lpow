import { Injectable , Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import * as moment from 'moment'
import firebase from 'firebase/app'


interface user {
  username: string;
  uid: string
  foto: string ;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : user;
  private eventocriado : AngularFirestoreCollection;
  private eventoup : AngularFirestoreCollection;
  private eventocriado2 : AngularFirestoreCollection;
  private eventoup2 : AngularFirestoreCollection;
  public passadostate: AngularFirestoreDocument;

   provCria1   
   provCria2   
   provUp1 
   provUp2 
  
  y = new Array<any>();
  w = new Array<any>();
  y2 = new Array<any>();
  w2 = new Array<any>();

  nextQueryCriados
  nextQueryUp
  

  hjdia = new Date().toISOString();
  m;

  constructor(@Inject(AngularFireAuth) 
  private auth: AngularFireAuth ,
  private firestore : AngularFirestore ,
  private router : Router ,

  private firebase : AngularFireDatabase  ){}//private editar : EditarModalPage) { }

  setUser(user : user){
    this.user = user
  }
  getUID(){
      return this.user.uid
  }
  async updateProfile(url , nome){
    var username = nome
    const  res = await this.auth.currentUser
    var iduser = res.uid
    res.updateProfile({
      photoURL : url,
      displayName  : nome
    })
    this.firestore.collection(`users`).doc(`${res.uid}`).update({imgUser: url , username:nome })

    this.firebase.database.ref(`users/${res.uid}/img`).set(url)
  
    this.firebase.database.ref(`users/${res.uid}/username`).set({username,iduser})

}
async updateNome(nome){
  var username = nome
  const  res = await this.auth.currentUser
  var iduser = res.uid
  res.updateProfile({
  displayName  : nome
  })
  this.firestore.collection(`users`).doc(`${res.uid}`).update({ username:nome })
  this.firebase.database.ref(`users/${res.uid}/username`).set({username,iduser})

}
async updateImage(url){
  const  res = await this.auth.currentUser
  var iduser = res.uid
  res.updateProfile({
    photoURL : url,
  })
  this.firestore.collection(`users`).doc(`${iduser}`).update({imgUser: url })

  this.firebase.database.ref(`users/${iduser}/img`).set(url)


}
login(email,password){
  return this.auth.signInWithEmailAndPassword(email,password)
}
logout(){
  return this.auth.signOut()
}
denuncia(denunciado){
  this.firestore.collection('users').doc(`${denunciado}`).update(  {Denuncias : firebase.firestore.FieldValue.increment(1)})
}
todasdenuncias(denunciadissimo){
  this.firestore.collection(`Denuncias`).doc(`${denunciadissimo.id}`).set(denunciadissimo)
}
async ordenar(escolha , up){
  console.log(up)
    if ( up == false) {
      console.log("TA MUDANDO")
      this.firestore.collection(`users`).doc(`${escolha}`).update({ UP : true})
    }
    if (up == true) {
      console.log("TA MUDANDO")
      this.firestore.collection(`users`).doc(`${escolha}`).update({ UP : false})
    }
  }
getauth(){
  return this.auth 
}

listadecriados(cria){
  console.log(cria)
  this.eventocriado = this.firestore.collection('eventos', ref => ref.where('userID','array-contains',`${cria}`).orderBy("UPnum" , "desc").limit(10))
  this.eventocriado.get().subscribe( criados =>{
     criados.forEach( evc =>{
       const data = evc.data()
       const id = evc.id
       if (data.fim < this.hjdia) {
      //  console.log(data.fim, " menor que ", this.hjdia) // checar se data do  evento esta no futuro
        this.passadostate = this.firestore.doc(`eventos/${id}`)
        this.passadostate.update({
          passado: true
        })
      }
      moment.locale('pt-BR')
      this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
      data.dia = this.m 
      this.provCria1 = { id, ...data }
      this.w.push(this.provCria1)
      this.nextQueryCriados = evc
     })
   
  })
}
listadecriados2(cria2){
const lastC = this.nextQueryCriados 
  this.eventocriado2 = this.firestore.collection('eventos', ref => ref.where('userID','array-contains',`${cria2}`).orderBy("UPnum" , "desc").startAfter(lastC).limit(3))
   return this.eventocriado2.get().subscribe( criados =>{
    criados.forEach( c =>{
      const data = c.data()
      const id = c.id
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
     this.provCria2 = { id, ...data }
     this.w2.push(this.provCria2)
     this.nextQueryCriados = c
    })
  
 })
}
listadeup(up_us){
  this.eventoup = this.firestore.collection('eventos', ref => ref.where('up','array-contains',`${up_us}`).orderBy("UPnum" , "desc").limit(25))
  return this.eventoup.get().subscribe( upados =>{
    upados.forEach(up => {
      const data = up.data()
       const id = up.id
       if (data.fim < this.hjdia) {
         // checar se data do  evento esta no futuro
        this.passadostate = this.firestore.doc(`eventos/${id}`)
        this.passadostate.update({
          passado: true
        })
      }
      moment.locale('pt-BR')
      this.m = moment(data.dia).format('ddd DD MMM - HH:mm')
      data.dia = this.m 
      this.provUp1 = { id, ...data }
      this.y.push(this.provUp1)
     
      this.nextQueryUp = up
     })
   
    })
    
}
listadeup2(user){
 const last =  this.nextQueryUp 
 console.log(last)
  this.eventoup2 = this.firestore.collection('eventos', ref => ref.where('up','array-contains',`${user}`).orderBy("UPnum" , "desc").startAfter(last).limit(25))
  return this.eventoup2.get().subscribe( upei => {
    upei.forEach(upi =>{
      const data = upi.data()
      const id = upi.id
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
     this.provUp2 = { id, ...data }
     this.y2.push(this.provUp2)
     this.nextQueryUp = upi
    })
  

    })

}
}

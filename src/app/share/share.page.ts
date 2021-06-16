import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'
import * as moment from 'moment'
@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
m
screen :any
eventoID
aparecer : boolean = true
x

private evento : AngularFirestoreCollection
  constructor(
    private screenshot: Screenshot ,
    private sharing : SocialSharing,
    private route : ActivatedRoute,
    private firestore :  AngularFirestore, ) {
    this.eventoID = this.route.snapshot.paramMap.get('chave')
    this.getevento()
   }

  ngOnInit() {
   
  }

  async screenShotURI() {
      await this.x != null
    this.screenshot.URI(100).then(res => {
      this.screen =  res.URI;
      console.log(res.URI , res)
       this.aparecer = true
    })
  
}
getevento(){
  this.evento = this.firestore.collection('eventos', ref => ref.where('chave2','==',`${this.eventoID}`)) // Firestore evento
  return this.evento.get().subscribe( b =>{
    b.forEach( com =>{
      const val = com.data()
      moment.locale('pt-BR')
      this.m = moment(val.dia).format('ddd DD MMM - HH:mm')
      val.dia = this.m
      this.x = val
    })
  })
}

shareInstagram(){
  setTimeout(() =>{
    this.screenShotURI()
  },3000
  )
  this.aparecer = true
// 2 arguments
this.sharing.shareViaInstagram(this.x.nome , this.screen)

}

shareTwitter(){
  setTimeout(() =>{
    this.screenShotURI()
  },3000
  )
  this.aparecer = true
  this.sharing.shareViaTwitter(this.x.nome , this.screen)

}

shareWatsapp(){
  setTimeout(() =>{
    this.screenShotURI()
  },3000
  )
  this.aparecer = true
  this.sharing.shareViaWhatsApp(this.x.nome, this.screen)
}
shareFacebook(){
  setTimeout(() =>{
    this.screenShotURI()
  },3000
  )
  this.aparecer = true
  this.sharing.shareViaFacebook(this.x.nome ,this.screen)
}



}
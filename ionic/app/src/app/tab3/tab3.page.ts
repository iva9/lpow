import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore'
import { UserService } from '../user.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  userPosts

  constructor(private afs: AngularFirestore , private user: UserService) {
    const posts = afs.doc(`users/${user.getUID()}`)
    this.userPosts = posts.valueChanges()
    }

  ngOnInit(){
    
  }
}

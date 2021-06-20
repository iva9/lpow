import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController , LoadingController , ModalController} from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { TutorialPage } from '../tutorial/tutorial.page';


@Component({
  selector: 'app-criar',
  templateUrl: './criar.page.html',
  styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {
  public loading: any
  username: string = ""
  abrir: boolean = false;
  items ;
  jalogado : boolean = false
  item;
  tem : boolean = false;
  email: string = ""
  password: string =""
  cpassword: string = ""
  usersdetails : AngularFireList<any>
  constructor(public afAuth: AngularFireAuth,
    public alert: AlertController,
    public route: Router,
    public afdatabase: AngularFireDatabase,
    private firestore : AngularFirestore,
    public user: UserService,
    private modal: ModalController,
    public loadingC: LoadingController
  ){ 

    }

  ngOnInit() {
    this.getDataFromFire()

  }
    getDataFromFire(){
      this.afdatabase.list('users').valueChanges().subscribe(
        data =>{
          this.trataDados(data)
        }) 
    }
    trataDados(dados){
      this.items = Object.keys(dados).map(i => dados[i])  
      console.log(this.items)

       } 
      async register(){
        const todosnomes = this.items
        const osnomes = this.username.toLowerCase()
        const {username, email , password ,cpassword } = this 
        var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18"
        username.toLowerCase()
        if ( !username ){
         this.showalert("Erro" ,"insira nome de usuario")
         
       }      
        if( todosnomes.some( nome => (nome.username.username == osnomes)) ){
           return this.showalert("Erro" ,"nome ja existente")
         
         }
        if (password !== cpassword ){
            return   this.showalert("Erro" ,"senhas diferentes")
          }
          try{
             const res = await this.afAuth.createUserWithEmailAndPassword(email , password)
             console.log(res)
             var iduser = res.user.uid
             this.firestore.collection("users").doc(`${res.user.uid}`).set({
              username , iduser ,imgUser
             })
             this.afdatabase.database.ref(`users/${res.user.uid}/username`).set({
               username , iduser , imgUser
              })
              this.enviaremaildeverific()
              this.user.updateProfile( imgUser , username)
             
         }catch(error) {
           if(error.code == "auth/weak-password" ){
            return this.showalert("Senha Fraca" , "Senha deve ter no mínimo 6 caracteres")
           }
           if(error.code == "auth/invalid-email" ){
            return this.showalert("Erro" , "Email invalido")
           }
           if(error.code == "auth/email-already-in-use" ){
          return   this.showalert("Erro" , "Email ja em uso")
           }
      
         }
        
    }
     async showalert(header : string , message: string){
       const alert = await  this.alert.create({
         header,
         message,
         buttons: ["Ok"]
       })
       await alert.present() 
     }

     abriu(){
      this.abrir = !this.abrir
    }
    jalogs(){
      this.jalogado = true
    }
    async showmodalTutoria(){
      const modal = await this.modal.create({
        component : TutorialPage,
        componentProps : {
        }
      })
      modal.present()
    
     }

     
     async presentLoading(){
      this.loading = await this.loadingC.create({
         cssClass: 'my-custom-class',
         message: 'Espere um momento...',
         duration: 2000
       });
       await this.loading.present();
      }

     async javerifiquei(){ 
      this.presentLoading()
      const foi = (await this.afAuth.currentUser)
      foi.reload()
      setTimeout(() => {
        console.log("RELOAD")
        var dd = foi.emailVerified
        console.log(dd ,"email verified na criar user")
        if (dd == true){
          this.showmodalTutoria()
          this.route.navigate([ './home' ])
          this.showalert("Sucesso!" , "Bem vindo")
        }
      
      }, 3500);
     
    }
     async enviaremaildeverific(){
     (await this.afAuth.currentUser).sendEmailVerification()
      
      this.jalogs()
    }
    }
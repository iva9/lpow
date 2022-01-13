import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController , LoadingController , ModalController} from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { TutorialPage } from '../tutorial/tutorial.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.page.html',
  styleUrls: ['./criar.page.scss'],
})
export class CriarPage implements OnInit {
  public loading: any
  arraydenomes = new Array<any>();
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
    public google : GooglePlus,
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
      for (const key in this.items) {
       this.arraydenomes.push(this.items[key].username.username)
      }
      

       } 
      async register(){
        this.presentLoading()
        const todosnomes = this.items
        const osnomes = this.username.toLowerCase()
        const {username, email , password ,cpassword } = this 
        var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18"
        username.toLowerCase()
        if ( !username ){
          this.loadingC.dismiss()
        return this.showalert("Erro" ,"insira nome de usuario")
         
       }      
        if( this.arraydenomes.includes(osnomes)){
            this.loadingC.dismiss()
           return this.showalert("Erro" ,"nome ja existente")
         
         }
        if (password !== cpassword ){
            this.loadingC.dismiss()
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
            this.loadingC.dismiss()
            return this.showalert("Senha Fraca" , "Senha deve ter no mínimo 6 caracteres")
           }
           if(error.code == "auth/invalid-email" ){
            this.loadingC.dismiss()
            return this.showalert("Erro" , "Email invalido")
           }
           if(error.code == "auth/email-already-in-use" ){
            this.loadingC.dismiss()
            return   this.showalert("Erro" , "Email ja em uso")
            
           }
      
         }
         this.loadingC.dismiss()
        
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


    loginGooglecom(){
      this.presentLoading()
    this.LoginGoogle().then(() =>{
      //const res =  this.Afauth.currentUser
      
      this.mostraale()
    }).catch(err =>{
      this.showalert("erro" , err)
    })
    
    }
    
       LoginGoogle() {
         return this.google.login({}).then(result =>{
           const user_data_google = result
            return this.afAuth.signInWithCredential(auth.GoogleAuthProvider.credential(null , user_data_google.accessToken))
         })
        
}
    voltar(){
      this.route.navigate(['./criar-user'])
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
        if (dd == false){
          
          this.showalert("Ops!" , "Tente novamente em instantes")
        }
      
      }, 3500);
     
    }
     async enviaremaildeverific(){
     (await this.afAuth.currentUser).sendEmailVerification()
      
      this.jalogs()
    }


    async mostraale(){
      const res = await this.afAuth.currentUser 
      this.firestore.collection('users', ref => ref.where('iduser', '==', `${res.uid}`)).snapshotChanges().subscribe(usergg => {
        if (usergg.length > 0){
          this.loadingC.dismiss()
         this.route.navigate(['/home'])
         this.showalert('' ,'Conta criada com sucesso' )
        }
        else{
         var username = "Usuario"
         var imgUser = "https://firebasestorage.googleapis.com/v0/b/oreon-4bfc2.appspot.com/o/profile.png?alt=media&token=3ac5e17d-8119-46e5-9a20-e2e8d1080b18"
         var iduser = res.uid
         //display name ja existe
          this.firestore.collection("users").doc(`${res.uid}`).set({
          username , iduser ,imgUser
         })
         this.afdatabase.database.ref(`users/${res.uid}/username`).set({
         username , iduser , imgUser
          })
          this.showmodalTutorial()
          this.route.navigate(['/home'])
          this.loadingC.dismiss()
        }
      })
     }
     async showmodalTutorial(){
       const modal = await this.modal.create({
         component : TutorialPage,
         componentProps : {
         }
       })
       modal.present()
     }
   }
    
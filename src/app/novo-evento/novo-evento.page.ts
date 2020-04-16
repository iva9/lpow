import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.page.html',
  styleUrls: ['./novo-evento.page.scss'],

})

export class NovoEventoPage implements OnInit {
 
  @Input()
  file : File;
  nomeEvento: string;
  localiza: string;
  linkIng: string;
  contatoForm: FormGroup;

       constructor(private db : AngularFireDatabase , private storage : AngularFireStorage ,
         public formbuilder : FormBuilder ) {
         this.contatoForm = this.formbuilder.group({
            name:[null],
           local:[null],
           link:[null],
         })
       }

  ngOnInit() {
  
  } 
  cadastraEvento(){
    this.db.database.ref('/eventos').push(this.contatoForm.value)
    .then(() =>{
      this.contatoForm.reset();
      console.log('salvou');
    })
  }  
  
  
  
}

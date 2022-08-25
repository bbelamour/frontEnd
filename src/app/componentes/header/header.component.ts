import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validator } from '@angular/forms';
import { Person } from 'src/app/models/person/person';
import { PersonService } from 'src/app/servicios/person.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPersona: any
  formPersona : FormGroup;
  

  constructor(private personService: PersonService, private formBuilder: FormBuilder) { 
    this.formPersona = this.formBuilder.group({id:'', nombre: '', apellido:'', residencia: '', infoContacto: '', acercaDeMi: ''})
  }

  ngOnInit(): void {
    this.personService.listPerson().subscribe(
      data =>{
        this.miPersona = data;

  })
}
  perId!: number;
  idPerSelect ="";
  nombrePerSelect = "";
  apellidoPerSelect = "";
  residenciaPerSelect ="";
  infoContactoPerSelect ="";
  acercaDeMiPerSelect ="";

  findPerson(item: number){
    this.perId = item;
    this.idPerSelect = this.miPersona[this.perId].id;
    this.nombrePerSelect = this.miPersona[this.perId].nombre;
    this.apellidoPerSelect = this.miPersona[this.perId].apellido;
    this.residenciaPerSelect = this.miPersona[this.perId].residencia;
    this.infoContactoPerSelect = this.miPersona[this.perId].infoContacto;
    this.acercaDeMiPerSelect = this.miPersona[this.perId].acercaDeMi;
  }
  editPerson(item: number){
    let person: Person = {
      "id": this.miPersona[item].id,
      "nombre": this.formPersona.value.nombre,
      "apellido": this.formPersona.value.apellido,
      "residencia": this.formPersona.value.residencia,
      "infoContacto": this.formPersona.value.infoContacto,
      "acercaDeMi": this.formPersona.value.acercaDeMi

    }
  this.personService.editPerson(person).subscribe(
    data =>{
      alert("Persona editada")
      location.href="/"
    })
  }
  


}





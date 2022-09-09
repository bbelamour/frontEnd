import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Proyects } from 'src/app/models/proyects/proyects';
import { ProyectsService } from 'src/app/servicios/proyects.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  misProyectos: any
  formProyectos: FormGroup
  
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private proyectsService: ProyectsService, private formBuilder: FormBuilder, private tokenService: TokenService) {
    this.formProyectos = this.formBuilder.group({tituloProyects: '', fechaProyects:'', descripcionProyects:'', imgProyects:'' })
   }

   
  ngOnInit(): void {
    this.proyectsService.listProyects().subscribe(
      data =>{
        this.misProyectos = data;
      })

      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
      

      

  }
  ProyId!: number;

  tituloProyectsSelect=""; 
  fechaProyectsSelect="";
  descripcionProyectsSelect=""; 
  imgProyectsSelect="";

  findProyects(item: number){
    this.ProyId = item;
    this.tituloProyectsSelect = this.misProyectos[this.ProyId].tituloProyects;
    this.fechaProyectsSelect = this.misProyectos[this.ProyId].fechaProyects;
    this.descripcionProyectsSelect = this.misProyectos[this.ProyId].descripcionProyects;
    this.imgProyectsSelect = this.misProyectos[this.ProyId].imgProyects;
  } 
  
  editProyects(item: number){
    
    let proyects: Proyects = {
      "id": this.misProyectos[item].id,
      "tituloProyects": this.formProyectos.value.tituloProyects,
      "fechaProyects": this.formProyectos.value.fechaProyects,
      "descripcionProyects": this.formProyectos.value.descripcionProyects,
      "imgProyects": this.formProyectos.value.imgProyects
    }
    this.proyectsService.editProyects(proyects).subscribe(
      data =>{
        alert("Proyecto editado")
           location.href="/"
      })
  }
  addProyects(item: number){
    let proyects : Proyects = {
      "tituloProyects": this.formProyectos.value.tituloProyects,
      "fechaProyects": this.formProyectos.value.fechaProyects,
      "descripcionProyects": this.formProyectos.value.descripcionProyects,
      "imgProyects": this.formProyectos.value.imgProyects
    }
    this.proyectsService.addProyects(proyects).subscribe(
      data =>{
        alert("Proyecto agregado")
        location.href="/"
      })
  }
  deleteProyects(item: number){
    let proyects : Proyects = {
      "tituloProyects": this.formProyectos.value.tituloExp,
      "fechaProyects": this.formProyectos.value.fechaExp,
      "descripcionProyects": this.formProyectos.value.descripcionProyects,
      "imgProyects": this.formProyectos.value.imgProyects
    }
    this.proyectsService.deleteProyects(this.misProyectos[item].id).subscribe(
      data =>{
        alert("Proyecto eliminado")
        location.href="/"
      })
  }
}


import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/servicios/experience.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Experience } from 'src/app/models/experience/experience';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  misExperiencias: any
  formExperiencias: FormGroup;

  constructor(private experienceService: ExperienceService, private formBuilder : FormBuilder) { 
    this.formExperiencias = this.formBuilder.group({tituloExp:'', fechaExp:'', descripcionExp:''})
  }

  ngOnInit(): void {
    this.experienceService.listExperience().subscribe(
      data =>{
        this.misExperiencias = data;
  })
  }
  auxId!: number;
 
  tituloExpSelect = "";
  fechaExpSelect = "";
  descripcionExpSelect = "";
  
  findExperience(item: number){
 
    this.auxId = item;
    this.tituloExpSelect = this.misExperiencias[this.auxId].tituloExp;
    this.fechaExpSelect = this.misExperiencias[this.auxId].fechaExp;
    this.descripcionExpSelect = this.misExperiencias[this.auxId].descripcionExp;
  }

  editExperience(item: number){
    
    let experience: Experience = {
      "id": this.misExperiencias[item].id,
      "tituloExp": this.formExperiencias.value.tituloExp,
      "fechaExp": this.formExperiencias.value.fechaExp,
      "descripcionExp": this.formExperiencias.value.descripcionExp
    }

    //Llamamos a nuestro serv
    this.experienceService.editExperience(experience).subscribe(
      data =>{
        alert("Experiencia editada")
           location.href="/"
      })
  }
  addExperience(item: number){
    let experience: Experience = {
      "tituloExp": this.formExperiencias.value.tituloExp,
      "fechaExp": this.formExperiencias.value.fechaExp,
      "descripcionExp": this.formExperiencias.value.descripcionExp
    }
    this.experienceService.addExperience(experience).subscribe(
      data =>{
        alert("Experiencia agregada")
        location.href="/"
      })
  }
  deleteExperience(item: number){
    let experience: Experience = {
      "id": this.misExperiencias[item].id,
      "tituloExp": this.formExperiencias.value.tituloExp,
      "fechaExp": this.formExperiencias.value.fechaExp,
      "descripcionExp": this.formExperiencias.value.descripcionExp
    }
    this.experienceService.deleteExperience(this.misExperiencias[item].id).subscribe(
      data =>{
        alert("Experiencia eliminada")
        location.href="/"
      })
  }
}


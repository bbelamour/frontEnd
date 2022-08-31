import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Skills } from 'src/app/models/skills/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  misHabilidades: any
  formHabilidades: FormGroup;

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private skillsService: SkillsService, private formBuilder : FormBuilder, private tokenService: TokenService) { 
    this.formHabilidades = this.formBuilder.group({tituloSkills:'', imgSkills:'', porcentaje:''}) 
   }

   ngOnInit(): void {
    this.skillsService.listSkills().subscribe(
      data =>{
        this.misHabilidades = data
  })
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
}
   }
   skillsId!: number;
   //con esta variable recogeremos la info de los campos
   tituloSkillsSelect = "";
   imgSkillsSelect = "";
   porcentajeSelect = "";


  findSkills(item: number){
    //Le pasamos los valores a las variables de arriba
    this.skillsId = item;
    this.tituloSkillsSelect= this.misHabilidades[this.skillsId].tituloSkills;
    this.imgSkillsSelect = this.misHabilidades[this.skillsId].imgSkills;
    this.porcentajeSelect = this.misHabilidades[this.skillsId].porcentaje;
   
  }
    editSkills(item: number){
    //instanciamos un objeto del tipo experiencia como lo tenemos en el modelo deben ser los nombres de las variable
    //A diferencia del agregar a este metodo tenemos que pasarle el id como lo haciamos al editar
    let skills: Skills = {
      "id": this.misHabilidades[item].id,
      "tituloSkills": this.formHabilidades.value.tituloSkills,
      "imgSkills": this.formHabilidades.value.imgSkills,
      "porcentaje": this.formHabilidades.value.porcentaje
    }
    this.skillsService.editSkills(skills).subscribe(
      data =>{
        alert("Habilidad editada")
           location.href="/"
      })
  }
  addSkills(item: number){
    let skills: Skills = {
      "id": this.misHabilidades[item].id,
      "tituloSkills": this.formHabilidades.value.tituloSkills,
      "imgSkills": this.formHabilidades.value.imgSkills,
      "porcentaje": this.formHabilidades.value.porcentaje
    }
    this.skillsService.addSkills(skills).subscribe(
      data =>{
        alert("Habilidad agregada")
        location.href="/"
      })
    }
    deleteSkills(item: number){
      let skills: Skills = {
        "id": this.misHabilidades[item].id,
        "tituloSkills": this.formHabilidades.value.tituloSkills,
        "imgSkills": this.formHabilidades.value.imgSkills,
        "porcentaje": this.formHabilidades.value.porcentaje
      }
      this.skillsService.deleteSkills(this.misHabilidades[item].id).subscribe(
        data =>{
          alert("Habilidad eliminada")
          location.href="/"
        })
    }

    
    logOut(){
      this.tokenService.logOut();
      this.isLogged = false;
      location.href="/"
    }
      }

  
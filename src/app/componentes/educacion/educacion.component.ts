import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducationService } from 'src/app/servicios/education.service';
import { Education } from 'src/app/models/education/education';
import { TokenService } from 'src/app/servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  misEducaciones: any
  formEducaciones: FormGroup;

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private educationService: EducationService, private formBuilder : FormBuilder, private tokenService: TokenService) { 
    this.formEducaciones = this.formBuilder.group({tituloEdu:'', fechaEdu:'', descripcionEdu:'', imgEdu:''})
  }


    
  ngOnInit(): void {
    this.educationService.listEducation().subscribe(
      data =>{
        this.misEducaciones = data
  })
  
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLoginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }



  }
  auxId!: number;
 
  tituloEduSelect = "";
  fechaEduSelect = "";
  descripcionEduSelect = "";
  imgEduSelect = "";
  findEducation(item: number){
  
    this.auxId = item;
    this.tituloEduSelect= this.misEducaciones[this.auxId].tituloEdu;
    this.fechaEduSelect = this.misEducaciones[this.auxId].fechaEdu;
    this.descripcionEduSelect = this.misEducaciones[this.auxId].descripcionEdu;
    this.imgEduSelect = this.misEducaciones[this.auxId].imgEdu;
  }
    editEducation(item: number){
    
    let education: Education = {
      "id": this.misEducaciones[item].id,
      "tituloEdu": this.formEducaciones.value.tituloEdu,
      "fechaEdu": this.formEducaciones.value.fechaEdu,
      "descripcionEdu": this.formEducaciones.value.descripcionEdu,
      "imgEdu": this.formEducaciones.value.imgEdu
    }
    this.educationService.editEducation(education).subscribe(
      data =>{
        alert("Educación editada")
           location.href="/"
      })
  }
  addEducation(item: number){
    let education: Education = {
      "tituloEdu": this.formEducaciones.value.tituloEdu,
      "fechaEdu": this.formEducaciones.value.fechaEdu,
      "descripcionEdu": this.formEducaciones.value.descripcionEdu,
      "imgEdu": this.formEducaciones.value.imgEdu
    }
    this.educationService.addEducation(education).subscribe(
      data =>{
        alert("Educación agregada")
        location.href="/"
      })
    }
    deleteEducation(item: number){
      let education: Education = {
        "id": this.misEducaciones[item].id,
        "tituloEdu": this.formEducaciones.value.tituloEdu,
        "fechaEdu": this.formEducaciones.value.fechaEdu,
        "descripcionEdu": this.formEducaciones.value.descripcionEdu,
        "imgEdu": this.formEducaciones.value.imgEdu
      }
      this.educationService.deleteEducation(this.misEducaciones[item].id).subscribe(
        data =>{
          alert("Educación eliminada")
          location.href="/"
        })
    }

    logOut(){
      this.tokenService.logOut();
      this.isLogged = false;
      location.href="/"
    }
  }
    
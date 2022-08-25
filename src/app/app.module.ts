import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FondoComponent } from './componentes/fondo/fondo.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavComponent,
    FondoComponent,
    AppComponent,
    BannerComponent,
    HeaderComponent,
    ExperienciaComponent,
    FooterComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

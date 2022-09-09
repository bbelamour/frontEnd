export class Skills {

    id?: number;
    tituloSkills: string;
    imgSkills: string;
    porcentaje: string;

constructor(tituloSkills: string , imgSkills: string, porcentaje: string ){
    this.tituloSkills = tituloSkills;
    this.imgSkills = imgSkills;
    this.porcentaje = porcentaje;
}
}

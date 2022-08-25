export class Education {
    id?: number;
    tituloEdu: string;
    fechaEdu: string;
    descripcionEdu: string;
    imgEdu: string;

    constructor(tituloExp: string, fechaExp: string, descripcionExp: string, imgEdu: string){
        this.tituloEdu= tituloExp;
        this.fechaEdu= fechaExp;
        this.descripcionEdu= descripcionExp;
        this.imgEdu = imgEdu;
    }
   
}


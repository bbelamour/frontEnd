
export class Experience {
    id?: number;
    tituloExp: string;
    fechaExp: string;
    descripcionExp: string;

    constructor(tituloExp: string, fechaExp: string, descripcionExp: string){
        this.tituloExp= tituloExp;
        this.fechaExp= fechaExp;
        this.descripcionExp= descripcionExp;
    }
   
}

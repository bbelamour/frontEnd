export class Proyects {
    id?: number;
    tituloProyects: string;
    fechaProyects: string;
    descripcionProyects: string;
    imgProyects: string;

constructor(tituloProyects: string, fechaProyects: string,descripcionProyects: string, imgProyects: string ){
    this.tituloProyects = tituloProyects;
    this.fechaProyects = fechaProyects;
    this.descripcionProyects = descripcionProyects;
    this.imgProyects = imgProyects;
}
}

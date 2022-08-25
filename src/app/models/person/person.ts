export class Person {
    id?: number;
    nombre: string;
    apellido: string;
    residencia: string;
    infoContacto: string;
    acercaDeMi: string;

    constructor(nombre: string, apellido: string, residencia: string, infoContacto: string, acercaDeMi: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.residencia = residencia;
        this.infoContacto = infoContacto;
        this.acercaDeMi = acercaDeMi;
    }
}

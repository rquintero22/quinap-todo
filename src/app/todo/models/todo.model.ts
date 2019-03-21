
export class Todo {

    public id: number;
    public texto: string;
    public precio: number;
    public completado: boolean;

    constructor( texto: string ) {
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.precio = 0;
        this.completado = false;
        this.id = Math.random();
    }

}



export class Educacion {

    id?:number; 
    
    url_imagen: string;

    titulo:string; 

    inicio:string;
    
    fin:string;

    institucion:string; 

    constructor(url_imagen:string , titulo:string 
        ,inicio:string,fin:string,institucion:string){
            this.url_imagen = url_imagen;
            this.titulo = titulo;
            this.inicio = inicio;
            this.fin = fin;
            this.institucion = institucion;
            
        }
}

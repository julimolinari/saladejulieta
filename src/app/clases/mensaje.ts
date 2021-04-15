export class Mensaje {
    
    public mensaje : string;
    public fecha : string;
    public usuario : string;    


    constructor(mensaje : string, fecha : string, usuario: string){
        this.mensaje = mensaje;
        this.fecha = fecha;
        this.usuario = usuario;
        
    }


    public toJSON(){
        return {"mensaje" : this.mensaje , "fecha" : this.fecha , "usuario" : this.usuario};
    }
}

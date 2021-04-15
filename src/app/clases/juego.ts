export class Juego {

    public nombreJuego : string;
    private email : string;
    private idUsuario : string;
    private resultado : string;


    constructor(nombreJuego : string, email : string, idUsuario: string, resultado : string){
        this.nombreJuego = nombreJuego;
        this.email = email;
        this.idUsuario = idUsuario;
        this.resultado = resultado;
    }


    public toJSON(){
        return {"nombreJuego" : this.nombreJuego , "email" : this.email , "idUsuario" : this.idUsuario, "resultado" : this.resultado};
    }
}

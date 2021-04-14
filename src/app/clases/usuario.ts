export class Usuario {

    public email : string;
    private password : string;
    private usuario : string;
    private dni : string;


    constructor(email : string, password : string, usuario: string, dni : string){
        this.email = email;
        this.password = password;
        this.usuario = usuario;
        this.dni = dni;
    }


    public toJSON(){
        return {"email" : this.email , "password" : this.password , "usuario" : this.usuario, "dni" : this.dni};
    }




}

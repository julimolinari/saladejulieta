import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class MiGuardGuard implements CanActivate {
  resultado!: boolean;

  constructor(private aut : AutenticacionService, private ruta : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.aut.currentUser().then(resp=>{
        if(resp == null){
          this.resultado = false;
          this.ruta.navigate(['/login']);
        }
        else
        this.resultado = true;
      })
      return this.resultado;
  }


  
}

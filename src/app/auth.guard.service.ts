import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Autenticacao } from "./auth.service";

@Injectable()
export class AutenticacaoGuard implements CanActivate {
  constructor(private autenticacao: Autenticacao) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.autenticacao.autenticado()

  }

}

import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";

@Injectable()
export class Autenticacao {

  public token_id: string | null | undefined

  constructor(
    private router: Router
  ) {

  }

  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    console.log('Chegamos até o serviço', usuario);

    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta: any) => {

        delete usuario.senha

        firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario)

      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  public autenticar(email: string, senha: string): void {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((resposta: any) => {
        firebase.auth().currentUser?.getIdToken()
          .then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', this.token_id);
            this.router.navigate(['/home'])
          })
      })
      .catch((error: Error) => console.log(error))
  }

  public autenticado(): boolean {

    if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
      this.token_id = localStorage.getItem('idToken')
    }

    if (this.token_id === undefined) {
      this.router.navigate(['/'])
    }

    return this.token_id !== undefined
  }

  public sair(): void {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('idToken')
        this.token_id = undefined
        this.router.navigate(['/'])
      })
  }
}

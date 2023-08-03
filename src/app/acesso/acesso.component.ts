import {
  style,
  trigger,
  state,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('aninamacao-banner', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-50px, 0)' }),
        animate('500ms 1s ease-in-out'),
      ]),
    ]),
    trigger('animacao-painel', [
      state('criado', style({ opacity: 1 })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(50px, 0)' }),
        animate(
          '1.5s 0s ease-in-out',
          keyframes([
            style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
            style({ offset: 0.8, opacity: 1, transform: 'translateX(0)' }),

            style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
            style({ offset: 0.9, opacity: 1, transform: 'translateY(10px)' }),
            style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
            style({ offset: 0.94, opacity: 1, transform: 'translateY(10px)' }),
            style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
            style({ offset: 0.98, opacity: 1, transform: 'translateY(10px)' }),

            style({ offset: 1, opacity: 1, transform: 'translateX(0)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AcessoComponent implements OnInit {
  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() {}

  ngOnInit() {}

  public exibirPainel(event: string) {
    this.cadastro = event === 'cadastro' ? true : false;
  }

  public inicioAnimacao(): void {
    console.log('inicio da animação');
  }

  public fimAnimacao(): void {
    console.log('fim da animação');
  }
}

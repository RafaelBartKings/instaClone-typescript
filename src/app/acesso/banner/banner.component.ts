import { Component, OnInit } from '@angular/core';
import { Imagem } from './imagem.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0,
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1,
        })
      ),
      transition('escondido <=> visivel', animate('2s ease-in')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  public estado: string = 'escondido';
  public imagens: Array<Imagem> = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.logicaImageRotation(), 3000);
  }

  public logicaImageRotation(): void {
    // console.log(this.imagens);

    //auxilia na exibição da imagem seguinte
    let idx: number = 0;

    // ocultar imagem
    for (let i: number = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';

        idx = i === 4 ? 0 : i + 1;

        break;
      }
    }

    //exibir a próxima imagem
    this.imagens[idx].estado = 'visivel';

    setTimeout(() => this.logicaImageRotation(), 3000);
  }
}

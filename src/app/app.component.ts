import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  martinQualities : any[];
  isClicked = false;
  constructor() {
    this.martinQualities = [
      {
        qualite: 'un membre d\' une famille,',
        src1: './assets/img/family_meme.png',
        src2: './assets/img/famille.jpg',
        isClicked: false,
      },
      {
        qualite: 'un poto !!',
        src1: './assets/img/pote_meme.jpg',
        src2: './assets/img/pote.jpg',
        isClicked: false,
      },
      {
      qualite: 'un charmeur ... ',
      src1: './assets/img/charmeur_meme.jpg',
      src2: './assets/img/charmeur.jpg',
      isClicked: false,

    },
    {
      qualite: 'mais surtout amoureux',
      src1: './assets/img/amoureux_meme.jpg',
      src2: './assets/img/amoureux.jpg',
      isClicked: false,

    },
    {
      qualite: 'aussi globe-trotteur',
      src1: './assets/img/globe_trotteur_meme.jpg',
      src2: './assets/img/globe_trotteur.jpg',
      isClicked: false,

    },
    {
      qualite: 'et footeux !',
      src1: './assets/img/foot_meme.jpg',
      src2: './assets/img/footeux.jpg',
      isClicked: false,

    },
    {
      qualite: 'parfois mysterieux',
      src1: './assets/img/mysterieux_meme.jpg',
      src2: './assets/img/mystérieux.jpg',
      isClicked: false,
    },
    {
      qualite: 'un fin gourmet',
      src1: './assets/img/gourmand_meme.png',
      src2: './assets/img/fin_gourmet.jpg',
      isClicked: false,
    },
    {
      qualite: 'mais surout un frère en or... <3',
      src1: './assets/img/frere_meme.png',
      src2: './assets/img/frere.jpg',
      isClicked: false,
    },
  ];
  }

  // tslint:disable-next-line:typedef
  onClickImg(q) {
    q.isClicked = !q.isClicked;
    const t = this.martinQualities.find(m => m.qualite === q.qualite)

  }

}

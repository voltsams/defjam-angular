import { Component, OnInit } from '@angular/core';
import { DefJam } from './defjam';
import { DEFJAM } from './mock-defjam-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' // fichier dédié à l'affichage en HTML
})
// dédié à la logique TypeScript pour faire tourner le composant
export class AppComponent implements OnInit {
  defjamPlayer: DefJam[] = DEFJAM;

  ngOnInit() {
  console.table(this.defjamPlayer);
  this.selectFighter(this.defjamPlayer[2]);
  }

  // déclaration d'une méthode dans notre composant qui renvoi la valeur sur laquelle l'user à cliqué 
  selectFighter(Fighter: DefJam){
    console.log(`Votre combattant est ${Fighter.name}`);
  }
}

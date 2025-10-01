import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lampadaSala = false;
  lampadaCozinha = false;
  lampadaQuarto = false;

  alternarLampada(comodo: string) {
    if (comodo == "sala"){
      this.lampadaSala =! this.lampadaSala;
    }
    else if (comodo == "cozinha"){
      this.lampadaCozinha =! this.lampadaCozinha;
    }
    else if (comodo=="quarto"){
      this.lampadaQuarto =! this.lampadaQuarto;
    }
  }
}

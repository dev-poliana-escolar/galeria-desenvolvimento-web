import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  preco_produto= 0;
  percentual = 0;
  preco_final = 0;
  resultado = false;
 

  calculaDesconto(){
    let desconto : number;

    desconto = this.preco_produto * (this.percentual/100);
    this.preco_final = this.preco_produto - desconto;
    this.resultado=true;

  }
  
}

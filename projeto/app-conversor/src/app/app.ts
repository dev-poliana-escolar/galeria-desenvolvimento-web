import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  temp_celsius = 0;
  temp_fahrenheit= 32;
  resultado : boolean = false;

  conversor(){
    // Celsius * 9/5) + 32
    this.temp_fahrenheit = (this.temp_celsius * (9/5)) + 32
    this.resultado = true;
  }
 

}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  temp_celsius = 0;
  temp_fahreinheit= 32;
  

  conversor(){
    // Celsius * 9/5) + 32
    this.temp_fahreinheit = (this.temp_celsius * (9/5)) + 32
     
  }

}

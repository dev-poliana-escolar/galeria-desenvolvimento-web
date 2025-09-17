---
date: 17/09
---

# Introdução ao Angular

`@Component`: é um decorador. Agrupa tudo aquilo que queremos mostrar na tela. Exemplo de código básico:

```ts
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Introdução ao Angular</h1>
    <hr/>
    <p>
      Curso: {{curso}} 
    </p> 
  <p>
    Numero: {{numero}} <button (click)="incrementar()">+</button><button (click)="decrementar()">-</button>
  </p>
  `,
})
export class Playground {
  curso = 'TSI';
  numero = 0;

  incrementar(){
    if (this.numero<10){
       this.numero++;
    };
   
  }
  
  decrementar(){
    if (this.numero>0){
      this.numero--;
    };
  }
}

bootstrapApplication(Playground);
```

- `selector`: Cria tags. Isto é, o nome da tag HTML que vai representar o componente.
- `template`: baseia códigos html ou aponta para um arquivo html.
Existem outros atributos!

---

Model, View e Controller (MVC). É o modo que o angular padroniza seus projetos.

> Portanto, o `Component` fazem parte da visão.

`bootstrapApplication`: é uma função usada para inicializar uma aplicação Angular.

---
- **Interpolação**: Ação de exibir o valor de uma variável. Representada por: `{{}}`
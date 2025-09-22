---
date: 17/09
date: 22/09

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

- **Interpolação**: Ação de exibir o valor de uma variável. Representada por: `{{}}`

---

# Input (Inserção de dados)
```ts
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
   <h2>Calculadora Angular</h2>
  <hr/>

  <p> Número 1: <input type="number" [(ngModel)]="numero_um" ></p>
  <p> Número 2: <input type="number"[(ngModel)]="numero_dois" ></p>
  <p>
    <button (click)="somar()">Somar</button>
    <button (click)="subtrair()" style="margin-left:4px">Subtrair</button>
    <button (click)="multiplicar()" style="margin-left:4px">Multiplicar</button>
    <button (click)="dividir()" style="margin-left:4px">Dividir</button>
  </p>
  <p>Resultado: {{resultado}} </p>
  
  `,
})
export class Playground {
  numero_um = 0;
  numero_dois = 0;
  resultado = 0;
  
  somar(){
    this.resultado = this.numero_um + this.numero_dois;
  }
  
  subtrair(){
    this.resultado = this.numero_um - this.numero_dois;
  }

  multiplicar(){
    this.resultado = this.numero_um * this.numero_dois;
  }

  dividir(){
    this.resultado = this.numero_um / this.numero_dois;
  }
  
}

bootstrapApplication(Playground);

```
---

## Formulários 
O `FormsModule` é um módulo que contém várias funcionalidades e diretivas para manipulação de formulários.

Recursos:

1. `ngModel`: Vinculação bidirecional de dados entre **modelo** e **visão**
2. `ngForm`: Vincular formulário com propriedades e metodos
3. `ngModelGroup`: Agrupamento de controles em um formulário.

Existem outros métodos!

> two-way data binding (vinculação bidirecional de dados): é um conceito que se refere à sincronização automática entre a visão (interface do usuário) e o modelo (dados ou lógica de negócios) em aplicações.


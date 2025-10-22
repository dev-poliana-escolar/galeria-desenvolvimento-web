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

---

### Por que usamos `[(ngModel)]`?

Quando o valor do _select_ muda, ele atualiza a variável **numero_slc**. E quando **numero_slc** muda no TypeScript, o valor exibido no _select_ também muda automaticamente.



---

# Estrutura de repetição e condicionais

Neste exemplo, fizemos uma tabuada simples.

```ts
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h2>Tabuada em Angular</h2>
    <hr/>
    <p>
      Número:
      <select [(ngModel)] = "numero_slc">
        <option [ngValue]= "0">Selecione um número</option>
         @for (numero of numeros; track numero){
          <option [ngValue]= "numero">{{numero}}</option>
         }
      </select>
    </p>

    <hr/>

    @if (numero_slc > 0){
    Resultado:
    <ul>
      @for (numero of numeros; track numero){
        <li>{{numero}} x {{numero_slc}} = {{numero * numero_slc}}</li>
      }
      
    </ul>
    }
   
    
      
  `,
})
export class PlaygroundComponent {
  numero_slc = 1;
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
}

bootstrapApplication(PlaygroundComponent);
```

---

- `track`: Otimiza a renderização de listas.
  Com `track`, você fornece uma **chave única** que o Angular pode usar para identificar cada item da lista.

- `ngValue` vs `value`:
  - `[value]`: funciona bem com valores primitivos (string, number, boolean)

   -`[ngValue]`: é usado quando você quer vincular qualquer tipo de dado, especialmente objetos
   Exemplos:
    ```ts
    <option [ngValue]="pessoa">{{pessoa.nome}}</option>
    ```
    > Aqui, pessoa pode ser um objeto como `{ id: 1, nome: 'Maria' }`.

Use [ngValue] quando o valor que você quer vincular ao ngModel não é um tipo primitivo (ou seja, é um objeto).
> Nesse caso da tabuada a operação de `+` iria contatenar se usasse `value`.

---

# Aula 13/10

```ts
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Exemplo - Pipes </h2>
  <p>Mensagem:</p>
  <input [(ngModel)]="mensagem" />
  <p>Data:</p>
  <input type="date" [(ngModel)]="dataAniversario" />
  <ul>
    <li>{{mensagem | uppercase}}</li>
    <li> {{ dataAniversario | date:'dd/MM/yyyy' }}</li>
    <li> {{ valor | currency:'BRL' }}</li>
  </ul>
  `,
})
export class Playground {
  mensagem="poliana inteligente; guarde essa data"
  dataAniversario = new Date();
  valor = 30.5;
}

bootstrapApplication(Playground);
```
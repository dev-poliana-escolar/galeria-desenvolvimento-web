# Projeto de Lâmpadas por Cômodos

Este projeto é uma aplicação Angular simples que simula lâmpadas em diferentes cômodos. Cada lâmpada pode ser acesa ou apagada individualmente.

![demonstração](../app-lampadas/gif-lampadas.gif)

## Estrutura

- `src/assets/images/` → contém as imagens das lâmpadas (acesa e apagada)  
- `src/app/app.component.ts` → lógica das lâmpadas  
- `src/app/app.component.html` → layout dos cômodos  
- `src/app/app.component.css` → estilo 

## Como rodar o projeto

1. **Pré-requisitos**
   ```bash
    node -v
    npm -v
   ```
   > Instale o Node.js no site oficial.

    E também o Angular CLI:

    ```bash
    npm install -g @angular/cli
    ng version #verifique se deu tudo certo :)
    ```


2. Clone o projeto
    ```bash
    https://github.com/dev-poliana-escolar/galeria-desenvolvimento-web.git
    cd galeria-desenvolvimento-web/projeto/app-lampadas
    ```

3. Instale dependencias
    ```bash
    npm install
    ```

4. Rode o projeto
    ```bash
    ng serve
    ```
    Acesse no navegador: http://localhost:4200/



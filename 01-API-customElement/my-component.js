const template = document.createElement("div");
template.innerHTML = `
    <style>
        p{ color: blue }
        .texto{ color: red }
    </style>
    <p>Hola mundo 2</p>
    <p class="texto">Texto ejemplo con estilos</p>
`;

class myComponent extends HTMLElement {
  constructor() {
    super(); //Agregamos super() para hacer uso de las propiedades extendidas de HTMLElement

    //Agregar contenido al component
    this.p = document.createElement("p");
  }

  //Para agregar el elemento al DOM inicializamos el método connectedCallback()
  connectedCallback() {
    this.p.textContent = "Hola mundo :)";
    this.appendChild(this.p);
    this.append(template);
  }
}

customElements.define("my-component", myComponent);

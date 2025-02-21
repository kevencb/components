class myComponent extends HTMLElement {
  constructor() {
    super(); //Agregamos super() para hacer uso de las propiedades extendidas de HTMLElement
    this.attachShadow({ mode: "open" }); //Habilitamos el ShadowDOM
  }

  //Hacemos uso del método getTemplate() para crear un template
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section>
            <h2>Título de la sección</h2>
            <p>Aqui va el contenido de esta sección</p>
            <a href="#">Conocer más...</a>
        </section>
        ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
      }

      section {
        width: 320px;
        background-color: tomato;
        border-radius: 8px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
      }
      h2 {
        font-size: 36px;
        color: green;
      }
      p {
        margin-bottom: 24px;
      }
      a {
        width: auto;
        border-radius: 24px;
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        background-color: aqua;
        color: grey;
      }
    </style>
    `;
  }

  render() {
    //Clonamos la estructura HTML y el contenido de nuestro componente para que pueda ser renderizado
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    //Para agregar el elemento al DOM inicializamos el método connectedCallback()
    this.render();
  }
}

customElements.define("my-component", myComponent);

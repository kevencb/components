class myComponent extends HTMLElement {
  constructor() {
    super(); //Agregamos super() para hacer uso de las propiedades extendidas de HTMLElement
    this.attachShadow({ mode: "open" }); //Habilitamos el ShadowDOM

    this.urlImg = this.getAttribute("urlImg");
    this.title = this.getAttribute("title");
    this.description = this.getAttribute("description");
    this.url = this.getAttribute("url");
    this.linkName = this.getAttribute("linkName");
  }

  //Para monitorear los atributos propios del componente y sobre los cuales debemos verficar su estado y cambio debemos crear un observable.
  static get observedAttributes() {
    //Retornamos mediante un array los atributos que vamos a estar observando
    return ["urlImg", "title", "description", "url", "linkName"];
  }

  //Mediante este método gestionaremos esos cambios y debemos pasarle tres atributos (attr, oldState, newState)
  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attr] = newValue;
    }
    if (oldValue !== newValue) {
      if (attr === "urlImg") {
        this.urlImg = newValue;
      }
      if (attr === "title") {
        this.title = newValue;
      }
      if (attr == "description") {
        this.description = newValue;
      }
      if (attr === "url") {
        this.url = newValue;
      }
      if (attr === "linkName") {
        this.linkName = newValue;
      }
    }
  }

  //Hacemos uso del método getTemplate() para crear un template
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section>
            <img src=${this.urlImg} alt=${this.title}/>
            <h2>${this.title}</h2>
            <div>
              <p>${this.description}</p>
              <a href=${this.url}>${this.linkName}</a>
            </div>
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
      img{
        width: 100%;
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
    this.shadowRoot.innerHTML = "";
    //Clonamos la estructura HTML y el contenido de nuestro componente para que pueda ser renderizado
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    //Para agregar el elemento al DOM inicializamos el método connectedCallback()
    this.render();
  }
}

customElements.define("my-component", myComponent);

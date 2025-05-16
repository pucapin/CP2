import { RemoveActions } from "../flux/Actions";

RemoveActions
class GardenPlant extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const commonName = this.getAttribute('c-name');
        const scientificName = this.getAttribute('s-name');
        const type = this.getAttribute('type');
        const flowering = this.getAttribute('flowering');
        const img = this.getAttribute('img');
        const sun = this.getAttribute('sun');
        const watering = this.getAttribute('watering');

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
<style>
  :host {
    display: block;
    min-width: 300px;
    background: linear-gradient(to bottom, #e6ffe6, #fafffa);
    border: 3px solid #7cb518;
    border-radius: 20px;
    padding: 16px;
    box-shadow: 4px 4px 0 #5b7c15;
    margin: 12px;
  }

  .img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 12px;
    border: 2px solid #a1cc6e;
    margin-bottom: 10px;
    background-color: white;
  }

  h1 {
    font-size: 1.5rem;
    color: #38761d;
    margin: 0;
  }

  h2 {
    font-size: 1.1rem;
    color: #556b2f;
    margin: 4px 0 8px;
    font-style: italic;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    margin: 4px 0;
  }
</style>

<div>
  <img src="${img}" class="img" alt="${commonName}">
  <h1>${commonName}</h1>
  <h2>${scientificName}</h2>
  <p><strong>Type:</strong> ${type}</p>
  <p><strong>Flowering Season:</strong> ${flowering}</p>
  <p><strong>Sun Exposure:</strong> ${sun}</p>
  <p><strong>Watering:</strong> ${watering}</p>
</div>

        `;
    }
}

export default GardenPlant;
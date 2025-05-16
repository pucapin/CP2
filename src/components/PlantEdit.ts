import { UpdateActions } from "../flux/Actions";
class PlantEdit extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render()
    }

render() {
  if (!this.shadowRoot) return;

  const commonName = this.getAttribute('c-name');
  const scientificName = this.getAttribute('s-name');
  const type = this.getAttribute('type');
  const flowering = this.getAttribute('flowering');
  const img = this.getAttribute('img');
  const sun = this.getAttribute('sun');
  const watering = this.getAttribute('watering');

  this.shadowRoot.innerHTML = `
<style>
  :host {
    display: block;
    max-width: 320px;
    background: linear-gradient(to bottom, #fffbd6, #fefbe9);
    border: 3px solid #f4d35e;
    border-radius: 20px;
    padding: 16px;
    box-shadow: 4px 4px 0 #d4a800;
    margin: 12px;
  }

  .img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    border-radius: 12px;
    border: 2px solid #ffe082;
    background-color: white;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.5rem;
    color: #b85d00;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
    color: #444;
    margin: 6px 0;
  }

  input {
    width: 100%;
    padding: 6px;
    border: 2px solid #ffcc80;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: inherit;
    background-color: #fffde7;
  }

  #save-btn {
    margin-top: 12px;
    background-color: #ffb74d;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    font-weight: bold;
    box-shadow: 2px 2px 0 #c77800;
    transition: background-color 0.2s ease;
  }

  #save-btn:hover {
    background-color: #ffa726;
  }
</style>

<div>
  <img src="${img}" class="img" alt="${commonName}">
  <h1>${commonName}</h1>
  <p>Scientific Name: <input id="scientific-name" value="${scientificName}"></p>
  <p>Type: <input id="type" value="${type}"></p>
  <p>Flowering Season: <input id="flowering" value="${flowering}"></p>
  <p>Origin: <input id="origin" value="${origin}"></p>
  <p>Sun Exposure: <input id="sunex" value="${sun}"></p>
  <p>Watering: <input id="watering" value="${watering}"></p>
  <button id="save-btn">💾 Save</button>
</div>

  `;

  this.shadowRoot.querySelector('#save-btn')?.addEventListener('click', () => {
    const newScientificName = this.shadowRoot?.querySelector('#scientific-name') as HTMLInputElement;
    const newType = this.shadowRoot?.querySelector('#type') as HTMLInputElement;
    const newFlowering = this.shadowRoot?.querySelector('#flowering') as HTMLInputElement;
    const newOrigin = this.shadowRoot?.querySelector('#origin') as HTMLInputElement;
    const newSun = this.shadowRoot?.querySelector('#sunex') as HTMLInputElement;
    const newWater = this.shadowRoot?.querySelector('#watering') as HTMLInputElement;

    if(commonName) {
    UpdateActions.updatePlant( {
      common_name: commonName,
      scientific_name: newScientificName.value,
      type: newType.value,
      origin: newOrigin.value,
      flowering_season: newFlowering.value,
      sun_exposure: newSun.value,
      watering: newWater.value
    });
  }
  });
  
}
}

export default PlantEdit;
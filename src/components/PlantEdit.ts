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
      .img { height: 200px; width: auto; }
    </style>
    <div>
      <img src="${img}" class="img">
      <h1>${commonName}</h1>
      <p>Scientific Name: <input id="scientific-name" value="${scientificName}"></p>
      <p>Type: <input id="type" value="${type}"></p>
      <p>Flowering Season: <input id="flowering" value="${flowering}"></p>
      <p>Origin: <input id="origin" value="${origin}"></p>
      <p>Sun Exposure: <input id="sunex" value="${sun}"></p>
      <p>Watering: <input id="watering" value="${watering}"></p>

      <button id="save-btn">Save</button>
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
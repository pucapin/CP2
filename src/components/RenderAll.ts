
import { RawPlant } from '../Types/Types';
import { getPlants } from '../services/getPlants';
import { store } from '../flux/Store';
import { State } from '../flux/Store';
import { UpdateActions } from '../flux/Actions';

class RenderAll extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Subscribe to store changes here once
    store.subscribe(() => {
      this.render();
    });
  }

connectedCallback() {
  const { plants } = store.getState();
    console.log('Initial plants from store:', plants);


  if (!plants || plants.length === 0) {
    
    getPlants().then(data => {
      UpdateActions.setPlants(data);
      this.render();  // render after data is set
    });
  } else {
    this.render(); // render immediately if plants already exist
  }
}


  async render() {
    const { plants } = store.getState();

    if (!this.shadowRoot) return;
    if (!Array.isArray(plants)) return;

    this.shadowRoot.innerHTML = `<div class="container"></div>`;
    const container = this.shadowRoot.querySelector('.container');

    plants.forEach(plant => {
      const plantCard = document.createElement('plant-card');
      plantCard.setAttribute('img', plant.img);
      plantCard.setAttribute('c-name', plant.common_name);
      plantCard.setAttribute('s-name', plant.scientific_name);
      plantCard.setAttribute('type', plant.type);
      plantCard.setAttribute('flowering', plant.flowering_season);
      plantCard.setAttribute('sun', plant.sun_exposure)
      plantCard.setAttribute('watering', plant.watering)
      container?.appendChild(plantCard);
    });
  }
}

export default RenderAll;
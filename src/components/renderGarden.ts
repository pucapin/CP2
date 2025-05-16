import { RawPlant } from '../Types/Types';
import { getPlants } from '../services/getPlants';
import { store } from '../flux/Store';
import { State } from '../flux/Store';
import { UpdateActions } from '../flux/Actions';

class RenderGarden extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Subscribe to store changes here once
    store.subscribe(() => {
      this.render();
    });
  }

connectedCallback() {
    this.render()
}


  render(state = store.getState()) {

    const garden = state.garden
    console.log(garden)

    if (!this.shadowRoot) return;
    if (!Array.isArray(garden)) return;

    this.shadowRoot.innerHTML = `
    <style>
         h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        }
     .container {
     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
     }
    </style>
    <h1>My Garden :3</h1>
    <div class="container">
    </div>`;
    const container = this.shadowRoot.querySelector('.container');

    garden.forEach(plant => {
    if (!plant) return;
      const plantCard = document.createElement('garden-plant');
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

export default RenderGarden;
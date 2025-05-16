
import { RawPlant } from '../Types/Types';
import { getPlants } from '../services/getPlants';
import { UpdateActions } from '../flux/Actions';
import { store } from '../flux/Store';
import { State } from '../flux/Store';

class EditPlants extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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

    async render(state = store.getState()) {
            const { plants } = store.getState();

        if (!this.shadowRoot) return;
        if (!Array.isArray(plants)) return;
        
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
        <h1>Editing Mode</h1>
        <div class="container">
        </div>
        `;
        const container = this.shadowRoot.querySelector('.container');
        plants.forEach(element => {
            const plant = document.createElement('edit-card');
            plant.setAttribute('img', element.img);
            plant.setAttribute('c-name', element.common_name);
            plant.setAttribute('s-name', element.scientific_name);
            plant.setAttribute('type', element.type);
            plant.setAttribute('flowering', element.flowering_season)
            plant.setAttribute('origin', element.origin);
            plant.setAttribute('sun', element.sun_exposure);
            plant.setAttribute('watering', element.watering);
            container?.appendChild(plant);
        });

    }
}

export default EditPlants;
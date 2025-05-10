import { store } from '../flux/Store';
import { State } from '../flux/Store';
import { RawPlant } from '../Types/Types';
import { getPlants } from '../services/getPlants';

class RenderAll extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {
        //store.subscribe((state:State) => {this.render(state)})
        this.render()
    }

    async render() {
        const data:RawPlant[] = await getPlants();

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        <div class="container">
        </div>
        `;
        const container = this.shadowRoot.querySelector('.container');
        data.forEach(element => {
            const plant = document.createElement('plant-card');
            plant.setAttribute('img', element.img);
            plant.setAttribute('c-name', element.commonName);
            plant.setAttribute('s-name', element.scientificName);
            container?.appendChild(plant);
        });

    }
}

export default RenderAll;
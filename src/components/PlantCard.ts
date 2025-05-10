import { Actions } from '../flux/Actions';
import { RawPlant } from '../Types/Types';

class PlantCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        <div>
        <style>
        .img {
        height: 200px;
        width: auto;
        }
        </style>
        <img src="${this.getAttribute('img')}" class="img">
        <h1>${this.getAttribute('c-name')}</h1>
        <h2>${this.getAttribute('s-name')}<h2>
        <button id="add-btn">
        Add to Garden
        </button>
        </div>
        `;
        const addBtn = this.shadowRoot.querySelector('add-btn');
        addBtn?.addEventListener('click', () =>
            console.log("")
            // actions.
        )
    }
}

export default PlantCard;
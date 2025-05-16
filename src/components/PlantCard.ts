import { AddActions } from "../flux/Actions";
class PlantCard extends HTMLElement {
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
        <div>
        <style>
        .img {
        height: 200px;
        width: auto;
        }
        </style>
        <img src="${img}" class="img">
        <h1>${commonName}</h1>
        <h2>${scientificName}</h2>
        <p>Type: ${type}</p>
        <p>Flowering Season: ${flowering}</p>
        <p>Sun Exposure: ${sun}p>
        <p>Watering: ${watering}</p>
        <button id="add-btn">
        Add to Garden
        </button>
        </div>
        `;
        const addBtn = this.shadowRoot.querySelector('add-btn');
        addBtn?.addEventListener('click', () =>
            AddActions.addToGarden({
                common_name: commonName || '',
                scientific_name: scientificName || '',
                img: img || '',
                type: type || '',
                origin: origin || '',
                flowering_season: flowering || '',
                sun_exposure: sun || '',
                watering: watering || ''
            })
            // actions.
        )
    }
}

export default PlantCard;
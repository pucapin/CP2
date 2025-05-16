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
<style>
  :host {
    display: block;
    min-width: 300px;
    font-family: 'Helvetica', 'Chalkboard SE', sans-serif;
    background: linear-gradient(to bottom, #d6f5d6, #f0fff0);
    border: 3px solid #6b8e23;
    border-radius: 20px;
    padding: 16px;
    box-shadow: 4px 4px 0 #4c7031;
    margin: 12px;
    transition: transform 0.2s ease-in-out;
  }

  :host(:hover) {
    transform: scale(1.03);
  }

  .img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 12px;
    border-radius: 12px;
    background-color: white;
    border: 2px solid #aac78c;
  }

  h1 {
    font-size: 1.5rem;
    color: #2e8b57;
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
    color: #333;
    margin: 4px 0;
  }

  #add-btn {
    margin-top: 10px;
    background-color: #8fbc8f;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    font-weight: bold;
    box-shadow: 2px 2px 0 #5a7f5a;
    transition: background-color 0.2s ease;
  }

  #add-btn:hover {
    background-color: #6fa86f;
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
  <button id="add-btn">🌱 Add to Garden</button>
</div>

        `;
        const addBtn = this.shadowRoot.getElementById('add-btn')
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
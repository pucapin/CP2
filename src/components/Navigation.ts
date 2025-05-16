import Navigate from "../utils/Navigate";

class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        <style>
            nav {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 100px; 
            }
        </style>
        <nav>
            <button id="all-btn" navigate-to="/"> All Plants </button>
            <button id="garden-btn" navigate-to="/garden"> My Garden </button>
            <button id="edit-btn" navigate-to="/edit"> Editing Mode </button>
        </nav>

        `;
        this.shadowRoot!.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', () => {
                const path = button.getAttribute('navigate-to');
                if (path) {
                    Navigate(path); // Flux action que da el atributo del botón (navigate-to="/path")
                }
            });
        });

        const landing = this.shadowRoot!.querySelector('#all-btn');
        landing?.addEventListener('click', () => {
            Navigate('/');
        });
    }
}

export default Navigation;
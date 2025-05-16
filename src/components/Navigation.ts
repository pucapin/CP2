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
        button {
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

        button:hover {
            background-color: #6fa86f;
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
import { store } from '../flux/Store';
import { State } from '../flux/Store';


class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.handleRouteChange = this.handleRouteChange.bind(this);
        store.subscribe((state: State) => {this.handleRouteChange(state)});
    }

    connectedCallback() {
        this.render();
        this.handleRouteChange();
    }

      handleRouteChange(state = store.getState()) {
        if (!this.shadowRoot) return;
        const path = state.currentPath || window.location.pathname; // Toma el path desde el estado del store
        //Dependiendo del botón seleccionado
        const content = this.shadowRoot.querySelector('.content');
        
        if (!content) return;
        content.innerHTML = '';
        switch (path) {
            case '/':
                content.innerHTML = `<render-all></render-all>`;
                break;
            case '/garden':
                content.innerHTML = `<render-garden></render-garden>`;
                break;
            case '/edit':
                content.innerHTML = `<edit-page></edit-page>`;
                break;
            default:
                content.innerHTML = `<h1>404 - Página no encontrada</h1>`;
                break;
        }
    }

    render() {
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <navigation-el></navigation-el>
        <div class="content"></div>`;
    }
}

export default Root;
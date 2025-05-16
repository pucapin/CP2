import Root from "./Root/Root";
import PlantCard from "./components/PlantCard";
import RenderAll from "./components/RenderAll";
import PlantForm from "./components/PlantForm";
import Navigation from "./components/Navigation";
import EditPlants from "./components/EditPlants";
import PlantEdit from "./components/PlantEdit";
customElements.define('root-element', Root);
customElements.define('plant-card', PlantCard);
customElements.define('render-all', RenderAll);
customElements.define('plant-form', PlantForm);
customElements.define('navigation-el', Navigation);
customElements.define('edit-page', EditPlants)
customElements.define('edit-card', PlantEdit);

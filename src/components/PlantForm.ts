class PlantForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

    }

    render() {

        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
        <form>
        <label>
        Name:
        <input name="name">
        </input>
        </label>
        <label>
        Scientific Name:
        <input name="s-name">
        </input>
        </label>
        <label>
        ID:
        <input name="id">
        </input>
        </label> 
                <label>
        Type:
        <input name="type">
        </input>
        </label>     
        </form>
        `;
        const form = this.shadowRoot.querySelector('form');
        form?.addEventListener('submit', (e) => {
            e.defaultPrevented;
            const formData = new FormData()
            fetch('http://192.168.131.101:8080/dca/api/plants', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json)
            .catch(res => console.log(res))
        });
    }
}

export default PlantForm;
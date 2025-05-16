// TODO: arregla typos de "error", maneja caso de error y exito
export async function getPlants() {
    return fetch('plantdata.json')
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log("There's a problem with the fetch request :(" + error);
    })
}

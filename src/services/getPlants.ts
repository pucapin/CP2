// TODO: arregla typos de "error", maneja caso de error y exito
export async function getPlants(): Promise<any> {
    return fetch('http://192.168.131.101:8080/dca/api/plants')
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log("There's a problem with the fetch request :(" + error);
    })
}

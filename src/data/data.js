//Obs: tem que ser armazenado com JSON e retornado como objeto
/* Exemplo do json 
let obj = [
    {
        nome: "Recife",
        lat: 123456,
        long: 365791,
    },
    {
        nome: "Abreu e lima",
        lat: 123456,
        long: 365791,
    },
]
*/


// Função que retorna os dados locais
export function getFav() {
    const fav = localStorage.getItem("locations");
    if (fav != null) {
        return JSON.parse(fav);
    }
    else{
        return []
    }
}

// Função que salva os dados no localStorage
function saveFav(fav) { // recebe um json com as localizações favoritas
    const fav_json = JSON.stringify(fav); // transformando numa string
    localStorage.setItem("locations", fav_json);
}

// Função que busca os dados da API (usar await quando for chamar)
export async function getWeather(lat, long) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric`)    
    const results = await response.json()

    const weather = {
        name: results.name,
        temp: results.main.temp,
        humidity: results.main.humidity,
        desc: results.weather[0].description,
        icon: results.weather[0].icon,
    }

    return weather;
}
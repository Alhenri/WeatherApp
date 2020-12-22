//Obs: tem que ser armazenado com JSON e retornado como objeto
/* Exemplo do json 

api_key: AIzaSyDnBKKWqyn76AS-l7IN8ZZzIrPgaqUKbI8

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

// Função que adiciona dados no localStorage
export function addFav(newfav) { // recebe um json com as localizações favoritas
    var fav = getFav();
    
    // adiciona o novo elemento na frente do vetor
    fav.unshift(newfav);

    console.log(fav);

    const fav_json = JSON.stringify(fav); // transformando numa string
    localStorage.setItem("locations", fav_json);
}

export function removeFav(remove) {
    // favorite.nome!=remove?favorite:null
    const fav = getFav();

    const newfav = fav.filter((favorite) => {
        if (favorite.nome === remove) {
            return null;
        }
        else{
            return favorite;
        }
    });

    localStorage.setItem("locations", JSON.stringify(newfav));
}

// Função que busca os dados da API (usar await quando for chamar)
export async function getWeather(lat, long) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric&lang=pt_br`)    
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
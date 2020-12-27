//Obs: tem que ser armazenado como string(json) e retornado como objeto
/* Exemplo do json 

let obj = [
    {
        nome: "Recife",
        lat: 123456,
        long: 365791,
    },
    {
        nome: "Olinda",
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
    const fav_json = JSON.stringify(fav); // transformando numa string
    // Salvando
    localStorage.setItem("locations", fav_json);
}


// Função que remove dos favoritos
export function removeFav(remove) {
    
    // Recebendo a lista de locais favoritos
    const fav = getFav();

    // Filtrando
    const newfav = fav.filter((favorite) => {
        if (favorite.nome === remove) {
            return null;
        }
        else{
            return favorite;
        }
    });

    // Salvando nova lista
    localStorage.setItem("locations", JSON.stringify(newfav));
}

// Função que edita os favoritos
export function editFav(newValue, oldValue){
    const fav = getFav();

    const newfav = fav.filter((favorite)=>{
        if (favorite.nome === oldValue) {
            favorite.nome = newValue;
            return favorite;
        }else{
            return favorite
        }
    });

    // Salvando novo valor
    localStorage.setItem("locations", JSON.stringify(newfav));
}

// Função que busca os dados da API
export async function getWeather(lat, long) {
    
    // Fazendo chamada a API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d812ba41f36e1b6fdb2e8a4b8224ec45&units=metric&lang=pt_br`)    
    const results = await response.json()

    // Salvando os resultados
    const weather = {
        name: results.name,
        temp: results.main.temp,
        humidity: results.main.humidity,
        desc: results.weather[0].description,
        icon: results.weather[0].icon,
    }

    return weather;
}
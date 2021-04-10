window.onload = function () {
    getCountries()
}

function getCountries() {
    fetch("https://raw.githubusercontent.com/DevTides/countries/master/countriesV2.json")
    .then((response) => response.json())
    .then((countries) => processCountries(countries))
    .catch( () => alert("No internet connection!"))
}

function processCountries(countries) {
    let container = document.getElementById('countries')
    Object.values(countries).forEach(element => {
        let { flagPNG, name, capital, languages, population, currencies } = element

        let country = {
            name: name,
            flag: flagPNG,
            capital: capital,
            languages: languages.length,
            currencies: currencies.length,
            population: population
        }
        container.appendChild(buildCountryCard(country))    
    });
}
function buildCountryCard(country) {
    let title = "Country Detail"

    let cardContainer = document.createElement('div')
    cardContainer.classList.add("card", "card-width", "mb-4", "shadow")

    let flagImg = document.createElement('img')
    flagImg.src = country.flag
    flagImg.classList.add("card-img-top")
    flagImg.alt = `This is ${country.name} flag`

    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body")

    cardContainer.appendChild(flagImg)
    cardContainer.appendChild(cardBody)

    let cardBodyTitle = document.createElement('h5')
    cardBodyTitle.classList.add("card-title")
    cardBodyTitle.textContent = title

    let cardTextContainer = createTextBody(country)

    cardBody.appendChild(cardBodyTitle)
    cardBody.appendChild(cardTextContainer)

    return cardContainer
}

function createTextBody(country) {
    let cardTextContainer = document.createElement('div')
    cardTextContainer.classList.add("card-text")
    
    let details = new Map([
        ['Name:', country.name],
        ['Capital:', country.capital],
        ['Currencies:', country.currencies],
        ['Languages:', country.languages],
        ['Population:', country.population]
    ])

    details.forEach((value, key) => {
        let item = document.createElement('div')
        item.classList.add("d-flex", "justify-content-between")
        
        let itemSpan = document.createElement('span')
        itemSpan.classList.add('fw-bold')
        itemSpan.textContent = key

        let itemValue = document.createElement('span')
        itemValue.textContent = value

        item.appendChild(itemSpan)
        item.appendChild(itemValue)

        cardTextContainer.appendChild(item)
    })

    return cardTextContainer
}
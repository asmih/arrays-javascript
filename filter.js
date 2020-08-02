function isBigEnough(value) {
    return value >= 10
}

const filtered = [12, 5, 120, 44].filter(isBigEnough)
console.log(filtered)

const frutas = ['Maça', 'Banana', 'Morango', 'Manga', 'Laranja']

const filterItem = (query) => {
    return frutas.filter(el => el.toUpperCase().indexOf(query.toUpperCase())) > -1
}

console.log(filterItem('go'))
console.log(filterItem('na'))
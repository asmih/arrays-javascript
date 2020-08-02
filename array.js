const frutas =['Maça', 'Banana']
console.log(frutas.length)

// acessando item no array

const primeiro = frutas[0]
const ultimo = frutas[frutas.length - 1]
console.log(primeiro, ultimo)

frutas.forEach(function(item, indice, array) {
    console.log(item, indice)
})

// adicionar item no final do array

const adicionar = frutas.push('Laranja')
console.log(frutas)

//remover o ultimo item do array

const removerUltimo = frutas.pop();
console.log(frutas)

// remover item no inicio do array
const removerInicio = frutas.shift();
console.log(frutas)

// adicionar item no inicio do array
const adicionarInicio = frutas.unshift('Morango')
console.log(frutas)

// procurar no array = indexOf
frutas.push('Manga')
const procurar = frutas.indexOf('Banana')
console.log(procurar)

// procurar e remover
const removeItem = frutas.splice(procurar, 1)
console.log(frutas)

const vegetais = ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']
console.log(vegetais)

const pos = 1, n = 2
const itensRemovidos = vegetais.splice(pos, n)
console.log(itensRemovidos)
console.log(vegetais)

const copiar = frutas.slice()
console.log(frutas)
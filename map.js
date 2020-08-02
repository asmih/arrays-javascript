const myMap = new Map()

const KeyString = 'uma string',

KeyObj = []
KeyFunc = function() {}

myMap.set(KeyString, 'valor associado com uma string')
myMap.set(KeyObj, 'valor associado com keyObj')
myMap.set(KeyFunc, 'valor associasdo com keyFunc')

myMap.get(KeyString)
myMap.get(KeyObj)
myMap.get(KeyFunc)

myMap.get ('uma string')
myMap.get({})
myMap.get(function() {})
console.log(myMap)
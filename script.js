const apiData = {
    url: 'https://api.dictionaryapi.dev/api/v2/entries/en',
    word: 'hello',
}

const {url, word} = apiData;
const apiUrl = `${url}/${word}`

console.log(apiUrl)

fetch(apiUrl)
    .then((data) => data.json())
    .then((hello) => console.log(hello))
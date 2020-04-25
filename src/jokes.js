// ES2015 export syntax
 export const jokes = {
   getOne: function () {
       return fetch('http://api.icndb.com/jokes/random')
       .then(res => res.json())
       .then(data => data.value.joke)
   }
}
import fetch from 'node-fetch';

const Films = new Promise(resolve => {
    resolve(
        fetch(`https://api.themoviedb.org/3/movie/550/watch/providers?api_key=a896c69ff1f11e6567b4cce9a258f7f3`)
    )
})

Films
.then(res => res.json())
.then(id => {
    setTimeout(() => {
        console.log(id)
    }, 2000)
})
.catch(err => console.log(err))
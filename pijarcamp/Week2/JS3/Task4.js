import fetch from 'node-fetch';

fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => {
        let users = data;
        users.map(function(users) {
            let names = users.name
            console.log(names)
        });
    })
    .catch(err => console.log(err))

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// get local text file data
function getText() {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}

// get json file data
function getJson() {
    fetch('posts.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title} <ul><li>${post.body}</li></ul></li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

// get from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}
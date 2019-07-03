var article = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        var myList = document.createElement('ul');
        if (towns[i].name == "Preston") {
            var events = towns[i].events;
            for (var x = 0; x < events.length; x++) {
                var listItem = document.createElement('li');
                listItem.textContent = events[x];
                myList.appendChild(listItem);
            }
            article.appendChild(myList);
        }
    }
}
/*
function showData(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        var myList = document.createElement('ul');
        if (towns[i].name == "Fish Haven") {
            var events = towns[i].events;
            for (var x = 0; x < events.length; x++) {
                var listItem = document.createElement('li');
                listItem.textContent = events[x];
                myList.appendChild(listItem);
            }
            article.appendChild(myList);
        }
    }
}

function showData(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        var myList = document.createElement('ul');
        if (towns[i].name == "Soda Springs") {
            var events = towns[i].events;
            for (var x = 0; x < events.length; x++) {
                var listItem = document.createElement('li');
                listItem.textContent = events[x];
                myList.appendChild(listItem);
            }
            article.appendChild(myList);
        }
    }
}
*/
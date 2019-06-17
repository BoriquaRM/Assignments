var requestURL = 'https://raw.githubusercontent.com/BoriquaRM/assignments/master/lesson-9/pages/towninfo.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var weatherData = request.response;
    populate(weatherData);
    populate2(weatherData);
}

function populate(jsonObj) {
    var towns = jsonObj["towns"];
    for (var x = 0; x < towns.length; x++) {

        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        var myP3 = document.createElement('p');
        var myP4 = document.createElement('p');

        var motto = document.createTextNode('Motto: ' + towns[x].motto);
        var founded = document.createTextNode('Year founded: ' + towns[x].yearFounded);
        var population = document.createTextNode('Population: ' + towns[x].currentPopulation);
        var rainfall = document.createTextNode('Annual rainfall: ' + towns[x].averageRainfall);

        myP1.appendChild(motto);
        myP2.appendChild(founded);
        myP3.appendChild(population);
        myP4.appendChild(rainfall);

        document.getElementsByClassName('data')[x].appendChild(myP1);
        document.getElementsByClassName('data')[x].appendChild(myP2);
        document.getElementsByClassName('data')[x].appendChild(myP3);
        document.getElementsByClassName('data')[x].appendChild(myP4);

        var motto1 = 'Motto: ' + towns[3].motto;
        var founded1 = 'Year founded: ' + towns[3].yearFounded;
        var population1 = 'Population: ' + towns[3].currentPopulation;
        var rainfall1 = 'Annual rainfall: ' + towns[3].averageRainfall;

        document.getElementById("mo").innerHTML = motto;
        document.getElementById("fo").innerHTML = founded;
        document.getElementById("po").innerHTML = population;
        document.getElementById("ra").innerHTML = rainfall;
    }

    request.onerror = function (error) {
        alert(error);
    }
}

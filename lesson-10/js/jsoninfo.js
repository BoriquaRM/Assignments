var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
		var townInfo = request.response;
		showInfo(townInfo);}
    
function showInfo(jsonObj) {
    var info = jsonObj['towns'];
    for (var i = 0; i < info.length; i++) {
        if (i === 2) { continue; }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        var myP3 = document.createElement('p');
        var myP4 = document.createElement('p');
        var myList = document.createElement('ul');

		/*Name of Town*/
        myH2.textContent = info[i].name;
        /*Town Motto*/
		myH3.textContent = '"' + info[i].motto + '"';
        /*Year of Founding*/
		myP1.textContent = 'Year Founded: ' + info[i].yearFounded;
        /*Current Population*/
		myP2.textContent = 'Current Population: ' + info[i].currentPopulation;
        /*Average Rainfall*/
		myP3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
        /*Upcoming Events*/
		myP4.textContent = 'Upcoming Events: ';

        var townEvents = info[i].events;
        for (var x = 0; x < townEvents.length; x++) {
            if (i === 2) { continue; }
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[x];
            myList.appendChild(listItem);  }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myP1);
        myArticle.appendChild(myP2);
        myArticle.appendChild(myP3);
		myArticle.appendChild(myP4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
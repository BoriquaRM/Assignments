var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
		var townData = request.response;
		showtowns(townData); }
    
function showtowns(jsonObj) {
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name=="Fish Haven"){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myP1 = document.createElement('p');
        var myP2 = document.createElement('p');
        var myP3 = document.createElement('p');
        var myP4 = document.createElement('p');
        var myList = document.createElement('ul');
		var myImg = document.createElement('img');
		
		/*Name of Town*/
        myH2.textContent = towns[i].name;
        /*Town Motto*/
		myH3.textContent = '"' + towns[i].motto + '"';
        /*Year of Founding*/
		myP1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        /*Current Population*/
		myP2.textContent = 'Current Population: ' + towns[i].currentPopulation;
        /*Average Rainfall*/
		myP3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
        /*Upcoming Events*/
		myP4.textContent = 'Upcoming Events: ';
		
        var townEvents = towns[i].events;
        for (var x = 0; x < townEvents.length; x++) {
            if (i === 2) { continue; }
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[x];
            myList.appendChild(listItem);  }
		if (towns[i].name=="Preston"){
          myImg.setAttribute('src','./images/PrestonID.png'); 
          myImg.setAttribute('alt','View of lake and mountains');
        }
        else if (towns[i].name=="Soda Springs"){
          myImg.setAttribute('src','./images/SodaspringsID.png'); 
          myImg.setAttribute('alt','Country view of round hay bell.');
        }
        else if (towns[i].name=="Fish Haven"){
          myImg.setAttribute('src','./images/FishhavenID.png'); 
          myImg.setAttribute('alt','View of mountains and a small cabin');
        }

        myArticle.appendChild(myH2);
		myArticle.appendChild(myImg);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myP1);
        myArticle.appendChild(myP2);
        myArticle.appendChild(myP3);
		myArticle.appendChild(myP4);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
		}
    }
}
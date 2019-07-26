var section = document.querySelector('section');
var requestURL = 'https://boriquarm.github.io/assignments/FINAL/scripts/JSONevents.json';

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
 
        var myArticle = document.createElement('articleEvent');
        var myH2 = document.createElement('h3');
        var myList = document.createElement('ul');

		/*Name of Town*/
        myH2.textContent = info[i].name;

        var townEvents = info[i].events;
        for (var x = 0; x < townEvents.length; x++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[x];
            myList.appendChild(listItem);  }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}
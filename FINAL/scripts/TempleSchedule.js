var entry = document.querySelector('entry');
var requestURL = 'https://boriquarm.github.io/assignments/FINAL/scripts/templeschedule.json';

var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
		var templeInfo = request.response;
		showInfo(templeInfo);}
    
function showInfo(jsonObj) {
    var info = jsonObj['list'];
    
	for (var i = 0; i < info.length; i++) {
 
        var myTR = document.createElement('tr');
        var myTD = document.createElement('td');
        var myUL = document.createElement('ul');

		/*Name of Town*/
		

        var templeSchedulesAM = info[i].AM;
        for (var x = 0; x < templeSchedulesAM.length; x++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeSchedulesAM[x];
            myUL.appendChild(listItem); 
			document.createElement('hr'); }
		
		var templeSchedulesPM = info[i].PM;
        for (var y = 0; y < templeSchedulesPM.length; y++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeSchedulesPM[y];
            myUL.appendChild(listItem); }
			
        myTR.appendChild(myTD);
		myTR.appendChild(myUL);
        entry.appendChild(myTR);
    }
	
}
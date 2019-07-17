function calculateWindChill() {
	var lowestTemp = parseFloat(document.getElementById('lowTemp').innerText);
	var highestTemp = parseFloat(document.getElementById('highTemp').innerText);
	var windSpeed = parseFloat(document.getElementById('windSpeed').innerText);
	var temperature = (lowestTemp + highestTemp)/2;

	var windChill = calculation(temperature, windSpeed);
	document.getElementById('windChill').innerHTML = Math.round(windChill);
}

function calculation(tempf, speed) {
	var wcf = 35.74 + (0.6215 * tempf) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempf * Math.pow(speed, .16));
	return wcf;
}
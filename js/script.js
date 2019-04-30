'use strict'

var url = 'http://api.icndb.com/jokes/random';

var btnJoke = dokument.getElementById('get-joke');
btnJoke.addEventListener('click' function () {
	getJoke();
});

var paragraph = dokument.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
};
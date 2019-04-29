'use strict'

var url = 'http://api.icndb.com/jokes/random';

var btnJoke = getElementById('get-joke');
btnJoke.addEventListener('click' function () {
	getJoke();
});

var paragraph = getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.inner.HTML = response.value.joke;
	});
	xhr.send();
};
var color = document.getElementById('color');
var sort = document.getElementsByClassName('sort');

color.onmousedown = function (event){
color.style.background = 'turquoise';
	if (event.target.className == 'sort ui-sortable-handle' || event.target.localName == "img") {
		for (var i=0; i < sort.length; i++){
		event.target.classList.add('active');
		}
	console.log(sort);
	}
}

color.onmouseup = function (event){
color.style.background = 'lightblue'
for (var i=0; i < sort.length; i++){
		sort[i].classList.remove('active');
	}
}

document.onclick = function(event){
	
}



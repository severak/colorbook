function updateSvgStyle() {
	document.getElementById('map').contentDocument.getElementById('style').textContent = document.getElementById('style_source').value;
}

function changeMap() {
	document.getElementById('map').data = document.getElementById('mapfile').value;
}


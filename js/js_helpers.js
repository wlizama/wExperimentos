
function hexRandomColor() {
    return '#' + Math.random().toString(16).substring(2, 8);
}

function rgbRandomColor(){
	return "rgb(" + randomNumberbetween(0, 255) + ", " + randomNumberbetween(0, 255) + ", " + randomNumberbetween(0, 255) + ")";
}

function randomNumberbetween(min, max){
	return Math.floor(Math.random() * max) + min ;
}

// obtener punto X e Y de un elemento
// recibe evento de elemento
// devuelve en formato JSON
function getXY(e){
	var posc_x = e.clientX;
	var posc_y = e.clientY;

	var objXY = { X: posc_x, Y: posc_y };
	return objXY;
}

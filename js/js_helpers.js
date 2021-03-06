
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

function isNavegadorMobile(){
//if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))

    if (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/MSIE/i)) ||
        (navigator.userAgent.match(/Windows Phone/i)) ||
        (navigator.userAgent.match(/IEMobile/i)) ||
        (navigator.userAgent.match(/BlackBerry/))
    ){
        return true;
    }
    else{
        return false;
    }
}
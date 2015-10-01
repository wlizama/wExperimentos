
$(document).ready(function() {

	setVelocidad();
	$("#cboVelocidad").on("change",setVelocidad);
	$("#btnUpdate").click(setVelocidad);
});

function setBG_Imagen(){
	movimiento = secuenciaJSON[contador];
	contador++;
	if(contador <= secuenciaJSON.length ){
		$("#imagen").css(movimiento);
	}
	else{
		console.log('detenido');
		if(animar != -1){
			clearInterval(animar);
		}
	}
}

function setVelocidad(){
	contador = 0;
	var velocidad = $("#cboVelocidad").val();

	if(animar != -1){
		clearInterval(animar);
	}
	animar = setInterval(setBG_Imagen, velocidad);
}

/** Variables **/
 var mov0 = '{"background": "url(img/black-zero-sprite.png)      0 -4px", "height": "90px", "width":  "6px"},';
 var mov1 = '{"background": "url(img/black-zero-sprite.png)  -13px -4px", "height": "90px", "width":  "6px"},';
 var mov2 = '{"background": "url(img/black-zero-sprite.png)  -27px -4px", "height": "90px", "width": "17px"},';
 var mov3 = '{"background": "url(img/black-zero-sprite.png)  -48px -4px", "height": "90px", "width": "32px"},';
 var mov4 = '{"background": "url(img/black-zero-sprite.png)  -82px -4px", "height": "90px", "width": "56px"},';
 var mov5 = '{"background": "url(img/black-zero-sprite.png) -140px -4px", "height": "90px", "width": "62px"},';
 var mov6 = '{"background": "url(img/black-zero-sprite.png) -202px -4px", "height": "90px", "width": "58px"},';
 var mov7 = '{"background": "url(img/black-zero-sprite.png) -262px -4px", "height": "90px", "width": "50px"},';
 var mov8 = '{"background": "url(img/black-zero-sprite.png) -315px -4px", "height": "90px", "width": "42px"},';
 var mov9 = '{"background": "url(img/black-zero-sprite.png) -362px -4px", "height": "90px", "width": "36px"},';
var mov10 = '{"background": "url(img/black-zero-sprite.png) -402px -4px", "height": "90px", "width": "37px"},';
var mov11 = '{"background": "url(img/black-zero-sprite.png) -440px -4px", "height": "90px", "width": "36px"},';
var mov12 = '{"background": "url(img/black-zero-sprite.png) -476px -4px", "height": "90px", "width": "36px"},';
var mov13 = '{"background": "url(img/black-zero-sprite.png) -513px -4px", "height": "90px", "width": "36px"},';
var mov14 = '{"background": "url(img/black-zero-sprite.png) -552px -4px", "height": "90px", "width": "43px"}';

var animar = -1;
var movimiento = "";
var contador = 0;

var strMovimientos = "[" + mov0 + mov1 + mov2 + mov3 + mov4 + mov5 + mov6 + mov7 + mov8 + mov9 + mov10 + mov11 + mov12 + mov13 + mov14 + "]";
var secuenciaJSON = JSON.parse(strMovimientos);


$(window).load(function (){

	// console.log("isMobile() > ", isMobile());
	
	var isMobile = isNavegadorMobile();

	lienzo = document.getElementById("canvasPrincipal");
	$(lienzo).attr({
		width: $(window).width(),
		height: $(window).height()
	});
	
	canvas = lienzo.getContext("2d");
	dibujar = false;

	// setting Events
	// if(isMobile != null){
	// 	$(lienzo).on("touchmove", getClickOnMovil);
	// }
	// else{
		$(lienzo).mousedown(getClick);
		$(lienzo).mousemove(dibujarElemento);
		$(lienzo).mouseup(function(){
			dibujar = false;
		});
	// }
	
	$(window).resize(function(event) {
		$(lienzo).attr({
			width: $(window).width(),
			height: $(window).height()
		});
	});
	$(".loading-contenido").hide();
});


function getClick(e){

	e.preventDefault();
	// console.log(e.which);
	if(e.which == 1){
		dibujar = true;
		dibujarElemento(e);
	}
	else{
		dibujar = false;
	}
}

function dibujarElemento(e){
	e.preventDefault();
	if(dibujar){
		var poscisiones = getXY(e);
		var x_posc = poscisiones.X;
		var y_posc = poscisiones.Y;

		canvas.beginPath();
		canvas.shadowBlur = 30;
		canvas.shadowColor = hexRandomColor();
		canvas.arc(x_posc, y_posc, 25, 0, 2*Math.PI);
		canvas.strokeStyle = hexRandomColor();
		canvas.stroke();
	}
}
		

function getClickOnMovil(e){

	// console.log(e);

	var poscisiones = getXY_Mobile(e);

	var x_posc = poscisiones.X;
	var y_posc = poscisiones.Y;

	canvas.beginPath();

	canvas.shadowBlur = 30;
	canvas.shadowColor = hexRandomColor();
    canvas.arc(x_posc, y_posc, 25, 0, 2*Math.PI);
	canvas.strokeStyle = hexRandomColor();
	// canvas.strokeStyle = "white";
	canvas.stroke();
}

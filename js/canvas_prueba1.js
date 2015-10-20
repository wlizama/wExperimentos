
$(window).load(function (){

	lienzo = document.getElementById("canvasPrincipal");
	$(lienzo).attr({
		width: $(window).width(),
		height: $(window).height()
	});
	
	canvas = lienzo.getContext("2d");

	// setting Events
	$(lienzo).mousemove(dibujaElemento);
	$(window).resize(function(event) {
		$(lienzo).attr({
			width: $(window).width(),
			height: $(window).height()
		});
	});

});


function dibujaElemento(e){

	var poscisiones = getXY(e);

	var x_posc = poscisiones.X;
	var y_posc = poscisiones.Y;

	canvas.beginPath();

	canvas.shadowBlur = 30;
	canvas.shadowColor = hexRandomColor();
	// console.log("x_posc > ", x_posc, "/ y_posc > ", y_posc);
    canvas.arc(x_posc, y_posc, 25, 0, 2*Math.PI);
	canvas.strokeStyle = hexRandomColor();
	// canvas.strokeStyle = "white";
	canvas.stroke();
}



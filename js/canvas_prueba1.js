
$(window).load(function (){

	// console.log("isMobile() > ", isMobile());
	lienzo = document.getElementById("canvasPrincipal");
	$(lienzo).attr({
		width: $(window).width(),
		height: $(window).height()
	});
	
	canvas = lienzo.getContext("2d");
	dibujar = false;
	var isMobile = isNavegadorMobile();

	// setting Events
	if(isMobile != null){
		$(lienzo).on("vmousedown", getClick);
		$(lienzo).on("vmousemove", dibujarElemento);
		$(lienzo).on("vmouseup", function(){
			dibujar = false;
		});
	}
	else{
		$(lienzo).mousedown(getClick);
		$(lienzo).mousemove(dibujarElemento);
		$(lienzo).mouseup(function(){
			dibujar = false;
		});
	}
	
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
	//console.log(e);
	if(e.which == 1 || e.which == 0){
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
		var radio_circunferencia = 15;

		canvas.beginPath();
		canvas.shadowBlur = 10;
		canvas.shadowColor = hexRandomColor();
		canvas.arc(x_posc, y_posc, radio_circunferencia, 0, 2*Math.PI);
		canvas.strokeStyle = hexRandomColor();
		canvas.stroke();
	}
}


$(document).ready(function() {
	// Event Listeners
	$("html").on("keyup", getKeyUp);
	$("html").on("keydown", getKeyDown);
	$("html").on("keypress", getKeyPress);
});

function getKeyUp (e){
	//console.log("KeyUp", e);
}


function getKeyDown (e){
	// console.log("KeyDown", e);
	var keyCode_tecla =  e.keyCode;
	var width         = $(".barra").width();
	var height        = $(".barra").height();
	var strHeight     = "";
	var strWidth      = "";

	// 37 IZQ || 39 DER
	if(keyCode_tecla == 37 || keyCode_tecla == 39){
		if(keyCode_tecla == 39){
			width = width + 10;
			$(".barra").width(width);
		}
		else{
			width = width - 10;
			if(width < 10){
				width = 10;
			}
			$(".barra").width(width);
		}
	}
	
	// 38 ARRB || 40 ABJ
	if(keyCode_tecla == 38 || keyCode_tecla == 40){
		if(keyCode_tecla == 38){
			height = height + 10;
			$(".barra").height(height);
		}
		else{
			height = height - 10;
			if(height < 10){
				height = 10;
			}
			$(".barra").height(height);
		}
	}

	strHeight = "<div><b>Altura: </b>" + height + "px</div>";
	strWidth  = "<div><b>Ancho: </b>" + width + "px</div>";

	$("#medidas").html(strHeight + strWidth);
}

function getKeyPress (e){
	//console.log("KeyPress", e);
	// $(".barra").width())
	
}
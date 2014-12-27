

$(document).ready(initEventos);



function initEventos(){

	$("#img-flecha").click(mostrarMenu);
}

function mostrarMenu(){

	 var m_oculto = $("#menu").css("width");

	if (m_oculto != "0px")
	{
		$("#menu").css("width", "0px");
		$("#logo").css("width", "0px");
		$("#pie-menu").css("width", "0px");
		$("#img-flecha").css("left","0px");
		$("#flecha").attr("src","img/flecha_der_blan.png");
		$("#flecha").attr("title","Mostrar");
		$("#contenido").css({
			width: "100%"
		});
	}
	else
	{
		$("#img-flecha").css("left","20%");
		$("#flecha").attr("src","img/flecha_izq_blan.png");
		$("#flecha").attr("title","Ocultar");
		$("#contenido").css({
			width: "80%"
		});
		$("#menu").css("width", "20%");
		$("#logo").css("width", "20%");
		$("#pie-menu").css("width", "20%");
	}
}

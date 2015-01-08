

$(document).ready(initComponents);



function initComponents(){

	$("#img-flecha").click(ocultarListaMenu);
	$(".menu-desplegable h2 img").click(muestraOpcionesMenu);
	iniciaMenus();
}

function ocultarListaMenu(){

	 var m_oculto = $("#menu").css("width");

	if (m_oculto != "0px")
	{
		$("#menu").css("width", "0px");
		$("#cabecera-menu").css("width", "0px");
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
		$("#cabecera-menu").css("width", "20%");
		$("#pie-menu").css("width", "20%");
	}
}


function iniciaMenus(){
	$("#lista-menu .menu-desplegable").each(function(indice, contenido){
		var cont_ul = $(contenido).children("ul");
			if (indice == 0) {
				var cont_h2 = $(contenido).children("h2");
				var cont_img = $(cont_h2).children("img");
					$(cont_img).css({
						"-ms-transform": "rotate(180deg)",
						"-webkit-transform": "rotate(180deg)",
						"transform": "rotate(180deg)"

					});
					$(cont_img).attr("title","Ocultar");
				$(cont_ul).css("display","block");

			}
			else{
				$(cont_ul).css("display","none");
			}
		}
	);
}

function muestraOpcionesMenu(){
	var menu_select = $($(this).parent()).parent();

	var m_select_display = $(menu_select).children("ul").css("display");
	var m_select_h2 = $(menu_select).children("h2");
	var m_select_img = $(m_select_h2).children("img");

	if (m_select_display == "none") {
		$(menu_select).children("ul").css("display", "block");
		
		$(m_select_img).css({
			"-ms-transform": "rotate(180deg)",
			"-webkit-transform": "rotate(180deg)",
			"transform": "rotate(180deg)"
		});
		$(m_select_img).attr("title","Ocultar");

	}
	else{
		$(menu_select).children("ul").css("display", "none");
		// $(menu_select).children("ul").css("height", "0px;");

		$(m_select_img).css({
			"-ms-transform": "rotate(0deg)",
			"-webkit-transform": "rotate(0deg)",
			"transform": "rotate(0deg)"
		});
		$(m_select_img).attr("title","Desplegar");
	}
}
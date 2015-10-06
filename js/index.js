
$(window).load(function() {
	asignaEventos();
	$(".loading-contenido").hide();
});

function asignaEventos (){

	// click icono-item
	var elementosIcono = $("[data-icono-id]");
	for (var j = 0; j < elementosIcono.length; j++) {
		$(elementosIcono[j]).click(toggleCuerpoItem);
	}
}

function muestraTrabajito (strIdCuerpoItem, strNombPag){
	
	// console.log("[data-cuerpo-item-id='" + strIdCuerpoItem + "']")
	// data-link-pag="' + strNombPag + '"
	// $(".loading-contenido").show();
	$("[data-cuerpo-item-id='" + strIdCuerpoItem + "']")
		.html('<div class="link-page"><a href="' + strNombPag + '" target="_blank" title="Mostrar en nueva ventana"><span class="icon-new-tab"></span></a></div>' +
				'<iframe data-frame-id="' + strIdCuerpoItem + '" src="'+ strNombPag +'" frameborder="0">' +
					'su navegador necesita soportar Iframes ¬_¬' +
				'</iframe>');
	//$(".loading-contenido").hide();
}

function toggleCuerpoItem (e){
	var elemIconoItem = $(this);
	var idIconoItem   = elemIconoItem.attr("data-icono-id");
	var iconoItem = elemIconoItem.find('span');
	var nomPagTrabajito = idIconoItem + ".html";
	// var nomPagTrabajito = idIconoItem;

	var elemCuerpoItem = $("[data-cuerpo-item-id='" + idIconoItem + "']");
//	var displayElemCuerpoItem = elemCuerpoItem.css("display");

	elemCuerpoItem.toggle();
	var displayElemCuerpoItem = elemCuerpoItem.css("display");
	var idElemCuerpoItem = elemCuerpoItem.attr('data-cuerpo-item-id');
	// idElemCuerpoItem = "#" + idElemCuerpoItem;

	if (displayElemCuerpoItem == "none") {
		iconoItem.attr('class', 'icon-circle-right');
	}
	else{
		iconoItem.attr('class', 'icon-cancel-circle');
		muestraTrabajito(idElemCuerpoItem, nomPagTrabajito);
	}
}

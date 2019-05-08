var crea = document.getElementById("crea");
var nomByT = 0;
crea.addEventListener("click",creaTargeta);

$(document).ready(function() {
    $("#borra").click(function(event) {
        $("#conTargetas").empty();
    });
});

function creaTargeta(){
    var targetas = document.getElementById("conTargetas");
    var div = document.createElement("div");
    var boton = document.createElement("button");
    var p = document.createElement("p");
    var img = document.createElement("img");
    var num = Math.round(getRandomArbitrary(100,999));
    var botonId = "cerrar" + nomByT;
    var tarId = "targeta" + nomByT;
    boton.setAttribute("class","boton tres");
    boton.setAttribute("id",botonId);
    p.setAttribute("class","id");
    img.setAttribute("class","imagen");
    img.setAttribute("src","http://lorempixel.com/200/170/");
    div.setAttribute("class","targeta");
    div.setAttribute("id",tarId);
    p.innerHTML = "ID = " + num;
    boton.innerHTML = "X";
    boton.setAttribute("onClick","eliminaTargeta(this)");
    div.appendChild(boton);
    div.appendChild(p);
    div.appendChild(img);
    targetas.appendChild(div);
    nomByT = nomByT + 1;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function eliminaTargeta(Boton){
    let id = Boton.id;
    var nomDiv = document.getElementById(id).parentElement.getAttribute("id");
    eliminarElemento(nomDiv);
}


function eliminarElemento(id){
	imagen = document.getElementById(id);	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		padre = imagen.parentNode;
		padre.removeChild(imagen);
	}
}
(function(){
	//variables
	var lista = document.getElementById("Lista"),
		tareaI = document.getElementById("tareaInput"),
		butonsubmit= document.getElementById("btn-agregar");

	//Funciones
	function agregarTarea(){
		var textoinput = tareaI.value;//obtengo el contenido del input
		var NuevoElemento = document.createElement("li"),//creo un elemento de tipo list
			ElementoA = document.createElement("a"),//creo un elemento de tipo A
			Nodotexto = document.createTextNode(textoinput);//creo un nodo de texto que contenga el contenido del input
		
		if(textoinput===""){
			tareaI.setAttribute("placeholder","Debe de indicar una tarea");
			tareaI.className= "error";
			return false;
		}

		ElementoA.appendChild(Nodotexto);//Agrego el nodo de texto a la etiqueta A
		ElementoA.setAttribute("href","#");
		NuevoElemento.appendChild(ElementoA);//Agrego la etiqueta A dentro de la etiqueta List

		lista.appendChild(NuevoElemento);//agrego el nuevo elemento a la UL

		tareaI.value= "";//Una vez Agregada Limpio el input

		//
		agregandoeventoEliminar();
	}

	function comprobarInput(){
		tareaI.className="";
		tareaI.setAttribute("placeholder","Nueva Tarea");
	}	

	function eliminarTarea(){
		this.parentNode.removeChild(this);
		//alert("La tarea ha sido Eliminada");
	}

	//Eventos
	butonsubmit.addEventListener("click",agregarTarea);//agregar tarea a la lista
	tareaI.addEventListener("click",comprobarInput);//comprobar el input

	function agregandoeventoEliminar(){
		//Borrando elementos de la lista (de forma dinamica "ya que estoy contando cuantos elementos estan bajo un Id y por medio del for los recorro, y les asigno un evento")
		for (var i = 0; i <= lista.children.length-1; i++) {
		lista.children[i].addEventListener("click",eliminarTarea);
		}
	}

	agregandoeventoEliminar();

}());
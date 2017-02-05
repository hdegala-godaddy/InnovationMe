

//Bad way of doing it
function assignEventsForElements(elems){


	for (var i=0;i<elems.length;i++){

		elems[i].onclick = function(){
			alert(i);
		};
	}
}







assignEventsForElements(document.getElementsByTagName("*"));



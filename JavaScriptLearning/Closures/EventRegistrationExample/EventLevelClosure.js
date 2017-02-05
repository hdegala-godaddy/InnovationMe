
//Following code registers onclick handlers, to alert the level of the element in the DOM


//Bad Way : which does not work way of doing it,
//The alert always shows 11 where ever or which ever element you click
function assignEventsForElements(elems){


	for (var i=0;i<elems.length;i++){

		elems[i].onclick = function(){
			alert(i);
		};
	}
}


//Good Way : Un Comment the following to understand real ussage of closure
//Here instead of directly assigning a function to onclick, we create a closure and assign it
// function assignEventsForElements(elems){


// 	for (var i=0;i<elems.length;i++){

// 		elems[i].onclick = function(i){
// 		return function(){
// 			alert(i);
// 		}}(i);
// 	}
// }

assignEventsForElements(document.getElementsByTagName("*"));






function changeColourAnimation(allElems){
	var elem;

	for (var i=0 ; i< allElems.length; i++)
	{
		colorThisSingleElem(allElems[i]);
	}

}


function colorThisSingleElem(elem){

	var initialColour = 0xFF0000;
	var finalColour = 0xFFFF00;
	function repeaterFunc(elem1){
		if (elem1){

			elem1.style.backgroundColor = "#"+initialColour.toString(16);

			console.log("backgroundColor: " + elem1.style.backgroundColor);
			initialColour = initialColour + 0xF00;
			if (initialColour < finalColour){
			
				console.log("Element ID " + elem1.id + " color:" + initialColour);
				setTimeout(function(){repeaterFunc(elem1)},1000);
			}
		}
	};
	
	setTimeout(function(){repeaterFunc(elem)},3000);
}


changeColourAnimation(document.getElementsByTagName("div"));

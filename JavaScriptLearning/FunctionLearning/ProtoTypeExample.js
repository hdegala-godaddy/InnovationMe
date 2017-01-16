


var superObject = {

	superFunction1 : function(){
		console.log("In Super Function : " + this.name);
	}


}


function constructSubObjectWitProtoType(obj){

	function SubObject(){
		this.name = "Harsha in Sub Object";
		this.superFunction1 = function(){
			console.log("In Sub Function : " + this.name);
		};


	}
	SubObject.prototype = obj;
	return new SubObject();
}

var subObjectInstance = constructSubObjectWitProtoType(superObject);

subObjectInstance.superFunction1();
superObject.augumentedPrintFunction = function(){
	console.log("In Augumented Print function with name :" + this.name);

}

subObjectInstance.augumentedPrintFunction();

delete subObjectInstance.superFunction1; // showing delete exposing the heirarchial supers method

subObjectInstance.superFunction1();



var firstModule = function(){

	var value = 20;

	return {

        getValue : function(){         //return value;
        	document.writeln("value is " + value);     },     
        	validate:   	function(){      
        	var element = event.target;        
        	 var valid =
        		element.value.length < 4 ? true:false ;         
        		if (!valid){
        			element.style.color="red";
        			var textNode = document.createTextNode(" please correct the message");
        			var pElemt = document.createElement("span");
        			var imageElement = document.createElement("img");
        			imageElement.src="DepictingConstructor.png";
        			imageElement.style.width = "10px";
        			imageElement.style.length= "4px";
        			pElemt.appendChild(imageElement);
        			pElemt.appendChild(textNode);
        			pElemt.style.color = "red";
        			pElemt.style.zIndex=5;

        			element.parentElement.insertBefore(pElemt,element);
        			document.getElementById("devid").innerHTML = "<lu> <li> Harsha</li><li> Degala</li>    </lu>";

        		}

        	}
        }

    }();

    console.log(firstModule.getValue());
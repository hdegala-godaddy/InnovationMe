//revealing module pattern
//module pattern
//variable hoisting
//closure ussage
var superObject = {


	superFunction1 : function(){

     function superObjectWithOutVar(){
        console.log(" superObjectWithOutVar :");
    }

    console.log("In Super Function : " + this.name);
}


}



Function.prototype.method = function(name,func){

    this.prototype[name] = func;
    console.log("Into function prototype method : " + this.name);
    return this;
}


Function.prototype.method('curry',function(){
    var arguements = args, that = this;

    return function(){
        return that.apply(null,args.concat(args))
    }

})





function constructSubObjectWitProtoType(obj){

// 	function SubObject(){
// 		this.name = "Harsha name which is defined in sub object";
// 		this.superFunction1 = function(){
// 			console.log("In Sub Function : " + this.name);
// 		};


// 	}
// //	SubObject.prototype = obj;
// 	return new SubObject();
}


constructSubObjectWitProtoType.method("logDetails", function(){

    console.log("Into redefined function as " + this.name);
  //  };
});

var pro = new constructSubObjectWitProtoType();
pro.logDetails();

constructSubObjectWitProtoType.curry();
//pro.curry();
/*
var subObjectInstance = constructSubObjectWitProtoType(superObject);

subObjectInstance.superFunction1();
superObject.augumentedPrintFunction = function(){
	console.log("In Augumented Print function wRevelaith name :" + this.name);

}

subObjectInstance.augumentedPrintFunction();
//console.log(JSON.)


delete subObjectInstance.superFunction1; // showing delete exposing the heirarchial supers method
console.log("After deleting subObjectFunction");
subObjectInstance.superFunction1();

*/

/*var firstModule = function(){

	var value = 20;

	return {

        getValue : function(){         //return value;
        	document.writeln("value is " + value);     },     
        	validate:   	function(){      
        	var element =  event.target;        
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





    console.log(firstModule.getValue());*/
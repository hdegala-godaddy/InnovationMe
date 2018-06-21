
function functionInvocationPatterExample(){
	//Example of Function Invocation Pattern and variable hoisting, here this refers to global object 
	console.log("Displayed from functionInvocationPatterExample with this.name showing value :" + this.name);
}
functionInvocationPatterExample();

var name = "HCD"; 
var objectLiteral={
	name:"harsha",
	display:function(numberOfTimes){
		var displayTimes = numberOfTimes?numberOfTimes:1;
		for(nameIndex=0;nameIndex<displayTimes;nameIndex++){
			console.log("GlobalName: i.e only name is used to diplay value:" + name);
			console.log("LocalName: i.e this.only name is used to diplay value:" + this.name);
		}
	}
}

objectLiteral.display(); // Method Invocation pattern because object is used to invoke function.

var objectLiteralsFunction= objectLiteral.display;

console.log("When objectLiteral.display\(\) is initialized to local variable and called used only Local variable");
objectLiteralsFunction(); // Function Invocation Pattern In this case "this" will point to global object

objectLiteralsFunction.apply(objectLiteral); // This is similar to Method Invocation pattern
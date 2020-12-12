function func(){
	var val = document.getElementById("dropdown").value;
	console.log(val);

	if(val == "1"){
		celToFah();
	} 	
	else if(val == "2"){
		fahToCel();

	}
	else{
		document.getElementById("display").value="Select an option";

	}
	return false;
}
function celToFah(){
	cel=document.getElementById("enterTemp").value;
	cel=parseFloat(cel);
	fah=(cel*(9/5))+32;
	show=fah+" "+"Fahrenheit";
	document.getElementById("display").value=show;
	
}
function fahToCel(){
	fah=document.getElementById("enterTemp").value;
	fah=parseFloat(fah);
	cel=(5*(fah - 32))/9;
	show=cel+" "+"Celsius";
	document.getElementById("display").value=show;
}
function fa(){
	document.getElementById("a2").value="";
	cel=document.getElementById("a1").value;
	cel=parseFloat(cel);
	if(cel==""){
		document.getElementById("a3").value="";
	}
	fah=(cel*(9/5))+32;
	show=fah+" "+"Fahrenheit";
	document.getElementById("a3").value=show;
}
function fb(){
	document.getElementById("a1").value="";
	fah=document.getElementById("a2").value;
	fah=parseFloat(fah);
	cel=(5*(fah - 32))/9;
	show=cel+" "+"Celsius";
	document.getElementById("a3").value=show;
}
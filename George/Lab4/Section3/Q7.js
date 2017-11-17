var c = 0;
function count(){
	c = c+1;
	document.getElementById("counter").innerHTML = c;
	if(c%2==1){
		document.getElementById("body").style.background = "red";
	}
	else if(c%2==0){
		document.getElementById("body").style.background = "blue";
	}
}
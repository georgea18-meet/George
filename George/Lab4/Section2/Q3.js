function alert_hello_world(){
	alert("Hello World!");
}

var t = 0;
function print_hello_user(user_name){

	alert("Hello " + user_name + " " + (Number(t)+1) + "!");
	t = t+1;
}
function is_time_odd(){
	var d = new Date();
	if (d.getSeconds()%2 == 0){
		return "even";
	}
	else if (d.getSeconds()%2 == 1){
		return "odd";
	}
}

function alert_is_time_odd(){
	var state = is_time_odd();
	alert("Time is "+state);
}
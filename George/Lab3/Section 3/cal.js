var num1 = prompt("Enter the first number:","");
var op = prompt("Enter the operation:","");
var num2 = prompt("Enter the second number:","");
if (op=='+') {
	alert(Number(num1)+Number(num2));
}
else if(op=='-') {
	alert(Number(num1)-Number(num2));
}
else if(op=='*') {
	alert(Number(num1)*Number(num2));
}
else if(op=='/') {
	alert(Number(num1)/Number(num2));
}
else if(op=='^') {
	alert(Math.pow(Number(num1),Number(num2)));
}
else if(op='max') {
	alert(Math.max(Number(num1),Number(num2)));
}
else if (op='min') {
	alert(Math.min(Number(num1),Number(num2)));
}
else{
	alert("It seems the operation you've chosen is not supported in this calculator, please try again!");
}

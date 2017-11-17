function fibbonaci(n){
	if(n==1){
		return 1;
	}
	else if(n==2){
		return 1;
	}
	else{
		return fibbonaci(n-1)+fibbonaci(n-2);
	}
}
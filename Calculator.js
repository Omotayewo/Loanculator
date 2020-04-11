function computeLoan(){
	var amt = document.getElementById('amt').value;
	var rate = document.getElementById('rate').value;
	var month = document.getElementById('month').value;
	var interest = (amt * (rate * .01)) / month;
	var payment = ((amt / month) + interest).toFixed(2);
		document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
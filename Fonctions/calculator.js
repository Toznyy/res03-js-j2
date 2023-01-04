// Exercice 1

function add(nb1, nb2){
	let sum=nb1+nb2;
	return sum;
	console.log(add(10,15));
}

function sub(nb1, nb2){
	let diff=nb1+nb2;
	return diff;
}

function mult(nb1, nb2){
	let prod=nb1*nb2;
	return prod;
}

function div(nb1, nb2){
	let divi=nb1/nb2;
	return divi;
}

function mod(nb1, nb2){
	let rest=nb1%nb2;
	return rest;
}

// Exercice 2

function askUserOperation(){
	let ope = window.prompt("Quelle opération choisis-tu ? (+ - * / ou %)");
	return ope;
}

function askUserFirstNumber(){
	let premNomb = window.prompt("Quel est le premier nombre du calcul ?")
	return premNomb;
}

function askUserSecondNumber(){
	let deuxNomb = window.prompt("Quel est le deuxième nombre du calcul ?")
	return deuxNomb;
}

// Exercice 3

function calculator(askUserOperation, askUserFirstNumber, askUserSecondNumber){
	if (askUserOperation == +){
		add(askUserFirstNumber, askUserSecondNumber);
	}
	if (askUserOperation == -){
		sub(askUserFirstNumber, askUserSecondNumber);
	}
	if (askUserOperation == *){
		mult(askUserFirstNumber, askUserSecondNumber);
	}
	if (askUserOperation == /){
		div(askUserFirstNumber, askUserSecondNumber);
	}
	if (askUserOperation == %){
		mod(askUserFirstNumber, askUserSecondNumber);
	}
	else{
		return alert("Utilise une autre opération")
	}
}
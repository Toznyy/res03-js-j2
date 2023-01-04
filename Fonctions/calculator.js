// Exercice 1

function add(nb1, nb2) {
	let sum = nb1 + nb2;
	return sum;
}

function sub(nb1, nb2) {
	let diff = nb1 + nb2;
	return diff;
}

function mult(nb1, nb2) {
	let prod = nb1 * nb2;
	return prod;
}

function div(nb1, nb2) {
	let divi = nb1 / nb2;
	return divi;
}

function mod(nb1, nb2) {
	let rest = nb1 % nb2;
	return rest;
}

// Exercice 2

function askUserOperation() {
	let ope = window.prompt("Quelle opération choisis-tu ? (+ - * / ou %)");
	return ope;
}

function askUserFirstNumber() {
	let premNomb = window.prompt("Quel est le premier nombre du calcul ?")
	return premNomb;
}

function askUserSecondNumber() {
	let deuxNomb = window.prompt("Quel est le deuxième nombre du calcul ?")
	return deuxNomb;
}

// Exercice 3

function calculator() {
	let operation = askUserOperation();
	let premierNombre = parseInt(askUserFirstNumber());
	let deuxiemeNombre = parseInt(askUserSecondNumber());
	
	if (operation === "+") {
		let addition = add(premierNombre, deuxiemeNombre);
		return addition;
	}
	if (operation === "-") {
		let difference = sub(premierNombre, deuxiemeNombre);
		return difference;
	}
	if (operation === "*") {
		let multiplication = mult(premierNombre, deuxiemeNombre);
		return multiplication;
	}
	if (operation === "/") {
		let division = div(premierNombre, deuxiemeNombre);
		return division;
	}
	if (operation === "%") {
		let reste = mod(premierNombre, deuxiemeNombre);
		return reste;
	}
	else {
		return alert("Utilise une autre opération");
	}
}

alert(calculator());
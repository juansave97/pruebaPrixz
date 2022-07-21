// Se realiza la solución en Javascript

function isPalindrome(str) {
    return str === str.split("").reverse().join(""); // dar vuelta a la cadena de texto [str] array 
}

function longest_palindrome(str) {

    let palindrome_arr = [];
    let substr = "";

    for (let i = 0; i < str.length; i++) {  // ciclos para obtener los Palíndromos posibles "

        for (let j = 1; j < str.length; j++) {
            substr = str.substring(i, j);

            if (isPalindrome(substr) && substr != "" && substr.length != 1) {
				palindrome_arr.push(substr); // si el Palídromo tiene una longitud diferente a 1, entonces agreguelo al array.
			}
        }
	
    }
 	
	console.log(palindrome_arr) // array resultante de los ciclos anteriores
    
	return palindrome_arr.sort(function (a, b) { // se modifica la estructura de la funcioón del .Sort, para permitir  
        
		// reordenar el array y obtener el Palíndromo más largo del array
		if (a.length > b.length) return -1;

        if (a.length < b.length) return 1;

        else return 0; 
	
	
    })[0];// se declara que el palíndromo que saldra en consola sera el ubicado en primera posición del array 
}

console.log("The longest palindromic substring is " + longest_palindrome("bananas"));

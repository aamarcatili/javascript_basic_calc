var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");
var operador = prompt("Ingrese una operacion (+,-,* o /)");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
switch(operador){
	case"+":
	resultado = numero1 + numero2;
	alert("esto es una suma y su resultado es "+ resultado);
	break;
	case"-":
	resultado = numero1 - numero2;
	alert("esto es una resta y su resultado es "+resultado);
	break;
	case"/":
	resultado = numero1 / numero2;
	alert("esto es una division y su resultado es "+resultado);
	break;
	case"*":
	resultado = numero1 * numero2;
	alert("esto es una multiplicacion y su resultado es "+resultado);	
	break;

	default:
	resultado = numero1+numero2;
	alert("esto es una suma por defecto y su valor es "+ resultado);
	break;
}
// formula a 
// if(isNaN(numero1) || isNaN(numero2) ){
// 	alert("Ingresar ambos valores numericos")
// }else{
// 	if(operador == '-'){
//    	var resultado = parseInt(numero1) - parseInt(numero2);
//    	alert("La resta es "+ resultado);
// 	}else if(operador == '+'){
//    	var resultado = parseInt(numero1) + parseInt(numero2);
//    	alert("La suma es "+ resultado);
// 	}else if(operador =='/'){
// 		var resultado = parseInt(numero1) / parseInt(numero2);
// 		alert("la division es "+ resultado);
// 	}else if(operador == '*') {
// 		var resultado = parseInt(numero1) * parseInt(numero2);
// 		alert("la multiplicacion es "+ resultado)
// 	}else if(operador==""){ 
// 		var resultado = parseInt(numero1) + parseInt(numero2);
// 		alert("Es una suma por defecto "+ resultado);
// 	} 
// 	}
// if(resultado == 10 || 20){
// 		alert("El resultado es 10 o 20 ");
// 	}	
//formula b

// if(numero1 && numero2){	
//   if(operador == '+'){
//     // parseInt convierte strings en números enteros, ej "4" en 4
//     var resultado = parseInt(numero1) + parseInt(numero2);
//     alert("La suma es " + resultado);
//     }
//     else if(operador == '-'){
//    	var resultado = parseInt(numero1) - parseInt(numero2);
//    	alert("La resta es "+ resultado);
//     }
//     else if(operador == '/'){
//    	var resultado = parseInt(numero1) / parseInt(numero2);
//     alert("la division es " + resultado);
//     }
//     else if(operador == '*'){
//     	var resultado = parseInt(numero1) * parseInt(numero2);
//     	alert("la multiplicacion es "+ resultado);
//     }else if(operador == ""){
//     	var resultado = parseInt(numero1)+parseInt(numero2);
//     	alert("es una suma por defecto "+resultado);
//     } else if(resultado == 10 || 20){
//   	alert("Resultado Igual a 10 o 20");
//   }
// formula c

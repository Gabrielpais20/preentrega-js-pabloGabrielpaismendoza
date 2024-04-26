console.log('hola mundoooo')

//determinar que numero es mayor 
alert('te dire el numero mayor ')

  let numero1 = parseInt(prompt('ingresa el primer numero'));
  let numero2 = parseInt(prompt('ingresa segundo numero'));
  let numero3 = parseInt(prompt('ingresa el tercer numero'));


if(numero1 > numero2 &&  numero1 > numero3){
      alert('el primer numero es el mayor')
}else if(numero2 > numero1 && numero2 > numero3){
      alert('el segundo numero es el mayor')
}else if(numero3 > numero1 && numero3 > numero2){
      alert('el tercer numero es el mayor')
}else if(numero1 == numero2 && numero1 == numero3 && numero2 == numero3){
      alert('los tres numeros valen lo mismo')
}else if(numero1 == numero2 && numero1 > numero3){
      alert('los primeros 2 numeros valen lo mismo y son los mayores')
}else if(numero1 == numero2 && numero1 > numero3){
      alert('los primeros 2 numeros valen lo mismo y son los mayores ')
} else if(numero2 == numero3 && numero2 > numero1){
      alert('los ultimos 2 numeros valen lo mismo y son los mayores')
}else if(numero1 == numero3 && numero1 > numero2){
      alert('el primer y tercer numero valen lo mismo y son los mayores ')
} else{
      alert('no ingresaste ningun numero o te falto agregar alguno')
}
 


 limiteMaximo = parseInt(prompt('dime un numero y te dire todos los numeros pares e inpares hasta llegar a este'))

 for(let i=0;i<=limiteMaximo;i++){
     if(i % 2 != 0){
         alert(i + ' es inpar')
     }else {
         alert(i + ' es par ')
     }
     if(i == limiteMaximo){
         alert('tabla terminada')
     }
 }


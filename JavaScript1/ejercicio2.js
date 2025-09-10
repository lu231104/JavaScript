const calculadora=(num1,signo,num2)=>{
let resultado;

    switch (signo){
        case "+":
            resultado=num1+num2;
            break;

        case "-":
            resultado=num1-num2;
            break;

        case "*":
            resultado=num1*num2;
            break;

        case "/":
            if(num2===0){
                alert("No se puede dividir entre 0")
                return;
            }else{
                resultado=num1/num2
            }
            break;

        case "^":
            resultado=num1**num2;
            break;

        case "√":
            if(num2==2){
                resultado=Math.sqrt(num1);                 
            }else if(num2==3){
                resultado=Math.cbrt(num1);                
            }else{
                alert("El segundo número tiene que ser 2 o 3")
                return;
            }break;   

        default:
            alert("Operar no válido")
            return;
    }
    document.write(resultado);
};

calculadora(
    parseInt(prompt("ingrese el numero 1")),
    prompt("ingrese la operacion(+, -, *, /,^,√(2 o 3))"),
    parseInt(prompt("ingrese el numero 2"))
);
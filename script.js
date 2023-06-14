//Initial References
 //Referencia inicial 
let decinp = document.getElementById("dec-inp");
let bininp = document.getElementById("bin-inp");
let errormsg = document.getElementById("error-msg");

 //Converter decimal para binario quando o usuario digitar o valor decimal
decinp.addEventListener("input", () => {
    let decValue = parseInt(decinp.value);
     //Converte o valor decimal em binario
    bininp.value = decValue.toString(2);
});

 //Converte binario para decimal quando digitar no campo binario
bininp.addEventListener("input", () => {
    let binValue = bininp.value;
     // Se o numero binario for valido en~tao converta para decimal
    if(binValue(binValue)) {
        decinp.value = parseInt(binValue, 2);
        errormsg.textContent = "";
    }
     //Se não, mostre a mensagem de erro
    else{
        errormsg.textContent = "Por favor entre com um numero binário valido"
    }

     // Função para checar se o numero binario é valido i.e 
    function binValidator(num){
        for(let i = 0; i < num.length; i++){
            if(num[i] != "0" && num[i] != "1"){
                return false;
            }
        }
        return true;
    }
})
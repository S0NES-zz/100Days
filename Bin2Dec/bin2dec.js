
//DECIMAL PARA BINARIO
decNumber = document.getElementById("inputDecimal")
binNumber = document.getElementById("inputBinario")

decNumber.addEventListener("input", ()=>{
    
    var restStack = [], rest, binaryString = '';
    
    while (decNumber.value > 0){
        rest = Math.floor(decNumber.value % 2);
        restStack.push(rest);
        decNumber.value = Math.floor(decNumber.value / 2);
    };
    while(restStack.length > 0){
        binaryString += restStack.pop().toString();
    };
    binNumber.value = binaryString;
});

//BINARIO PARA DECIMAL
binNumber.addEventListener("input", ()=>{
    let decimal = 0;
    for(let i = 0; i < binNumber.value.length ; i++){
        let bit = binNumber.value.charAt(binNumber.value.length -i-1);
        decimal += parseInt(bit) * Math.pow(2, i)
    }
    decNumber.value = decimal;
});


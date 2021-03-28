
//DECIMAL PARA BINARIO
decNumber = document.getElementById("inputDecimal")
binNumber = document.getElementById("inputBinario")

 //DECIMAL PARA BINARIO
decNumber.addEventListener("input", ()=>{
    var restStack = [], rest, binaryString = '';
    var decValue = decNumber.value; 
    
    while (decValue > 0){
        rest = Math.floor(decValue % 2);
        restStack.push(rest);
        decValue = Math.floor(decValue / 2);
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


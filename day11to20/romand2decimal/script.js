let numberAndNumerals = [
  { number: 1000000, roman: "_M" },
  { number: 500000, roman: "_D" },
  { number: 100000, roman: "_C" },
  { number: 50000, roman: "_L" },
  { number: 40000, roman: "_XL" },
  { number: 10000, roman: "_X" },
  { number: 5000, roman: "_V" },
  { number: 4000, roman: "M_V" },
  { number: 1000, roman: "M" },
  { number: 900, roman: "CM" },
  { number: 500, roman: "D" },
  { number: 400, roman: "CD" },
  { number: 100, roman: "C" },
  { number: 90, roman: "XC" },
  { number: 50, roman: "L" },
  { number: 40, roman: "XL" },
  { number: 10, roman: "X" },
  { number: 9, roman: "IX" },
  { number: 5, roman: "V" },
  { number: 4, roman: "IV" },
  { number: 1, roman: "I" },
];

let romanToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  _V: 5000,
  _X: 10000,
  _L: 50000,
  _C: 100000,
  _D: 500000,
  _M: 1000000,
};

let inputRomano = document.getElementById("inputRomano");
let inputDecimal = document.getElementById("inputDecimal");

inputRomano.addEventListener("input", ()=>{
    let value = inputRomano.value.toUpperCase();
    inputDecimal.value = convertRoman(value);
});
inputDecimal.addEventListener("input", () => {
  let value = inputDecimal.value.toUpperCase();
  inputRomano.value = convertDecimal(value);
});

function convertDecimal(decimalNumber) {
  let romanLetter = "";
  let decimal = decimalNumber;
  for (let i = 0; i < numberAndNumerals.length; i++) {
    if (numberAndNumerals[i].number <= decimal) {
      decimal = decimal - numberAndNumerals[i].number;
      romanLetter = romanLetter + numberAndNumerals[i].roman;
      i--;
    }
  }
  return romanLetter;
}
console.log("Roman: " + convertDecimal(250));
console.log("Decimal: " + convertRoman("CCL"));

function convertRoman(roman) {
  let total = 0;
  
  for (let i = 0; i < roman.length; i++) {
    let currentInt = romanToInt[roman.charAt(i)];
    let nextInt = romanToInt[roman.charAt(i + 1)];

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }
  return total;
}

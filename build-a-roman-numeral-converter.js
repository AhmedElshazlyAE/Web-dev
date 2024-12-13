** start of undefined **

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>
      Roman Numeral Converter
    </title>
  </head>
  <body>
    
    <h1>Roman Numeral Converter</h2>
    <div class = "input-box">
      <p class = "instruction">Enter a Number : </p>
      <input id="number" class = "input" input type="number"/>
      <button id = "convert-btn" class= "btn">Convert</button>
     </div>
    <div class = "output-box">
    <p id = "output"></p>
    </div>
    <script src="./script.js"></script>
  </body>


** end of undefined **

** start of undefined **

body {
  background-color: #F5F5F5;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  color: #229799;
  
}
h1 {
  text-align: center;
  margin-top: 100px;
}

.postitle {
  text-align: center;
  padding-top: -10px;
  font-size: .7em;
  font-family: cursive;
}

.input-box {
  padding: 10px;
  border-radius: 10px;
  color: #F5F5F5;

  width: fit-content;
  margin: 20px auto;
  text-align: center;
  background-color: #424242;
}
.output-box {
  padding: 10px;
  border-radius: 20px;
  color: #F5F5F5;
  border-color: #424242;
  
  width: fit-content;
  margin: 20px auto;
  text-align: center;
  background-color: #48CFCB;
}
.instruction{
  font-size: .8em;
  font-family: cursive;
  margin-top: -2px; 
}
.btn{
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
  border: 1px solid #FABC3F;
  background-color: 
#FABC3F;
border-radius: 5px;
padding-right: 30px auto;
color: #424242;

}

.input{
  border-radius: 5px;
  border: 0px;
  background-color: #F5F5F5;
  font-size: 15px;
}

.result{
  color: #F5F5F5;
  font-size: 1em;
}


** end of undefined **

** start of undefined **

const inputField = document.getElementById("number");
const outputText = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const romanNumerals = [
  {
    letter: "I",
    value: 1
  },
  {
    letter: "IV",
    value: 4
  },
  {
    letter: "V",
    value: 5
  },
  {
    letter: "IX",
    value: 9
  },
  {
    letter: "X",
    value: 10
  },
  {
    letter: "XL",
    value: 40
  },
  {
    letter: "L",
    value: 50
  },
  {
    letter: "XC",
    value: 90
  },
  {
    letter: "C",
    value: 100
  },
  {
    letter: "CD",
    value: 400
  },
  {
    letter: "D",
    value: 500
  },
  {
    letter: "CM",
    value: 900
  },
  {
    letter: "M",
    value: 1000
  }
];

const convertNum = () => {
  let num = parseInt(inputField.value);
  if(inputField.value === ""){
    outputText.innerText = "Please enter a valid number";
    return;
  }else if(num < 0){
    outputText.innerText = "Please enter a number greater than or equal to 1";
  }
  else if(num > 3999){
    outputText.innerText = "Please enter a number less than or equal to 3999";   
  }else{
    outputText.innerText = decimalToRoman(num);
  }
  

  
}

const decimalToRoman = (num) => {
  let output = "";
  while(num > 0){
    for(let i = romanNumerals.length - 1; i >= 0; i--){
      if(num >= romanNumerals[i].value){
        num -= romanNumerals[i].value;
        output += romanNumerals[i].letter;
        if(num >= romanNumerals[i].value) break;
      }
    }
  }
  return output;
}

convertBtn.addEventListener("click",convertNum);


** end of undefined **


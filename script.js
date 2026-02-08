
const result = document.getElementById("resultText");
const calculation = document.getElementById("calculationText");

let justCalculated = false; 


function insert(value) {
  
  if (justCalculated && !isNaN(value)) {
    calculation.textContent = "";
    result.textContent = "0";
  }

  calculation.textContent += value;
  justCalculated = false;
}


document.getElementById("clear").addEventListener("click", function () {
  calculation.textContent = "";
  result.textContent = "0";
  justCalculated = false;
});


document.getElementById("equal").addEventListener("click", function () {
  try {
    let exp = calculation.textContent;

    if (exp === "") return;

    let output = eval(exp);

    
    result.textContent = output;
    justCalculated = true; 
  } catch (error) {
    result.textContent = "Error";
    calculation.textContent = "";
    justCalculated = false;
  }
});


document.getElementById("back").addEventListener("click", function () {
  let exp = calculation.textContent;
  calculation.textContent = exp.substring(0, exp.length - 1);
});


document.addEventListener("keydown", function (event) {
  const key = event.key;

  
  if (!isNaN(key)) {
    insert(key);
  }

  
  if (key === "+") insert("+");
  if (key === "-") insert("-");
  if (key === "*") insert("*");
  if (key === "/") insert("/");
  if (key === ".") insert(".");

  
  if (key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  }

  
  if (key === "Backspace") {
    document.getElementById("back").click();
  }

  
  if (key === "Escape") {
    document.getElementById("clear").click();
  }
});

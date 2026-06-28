let display = document.getElementById("display");

function appendValue(value) {
  const lastChar = display.value.slice(-1);
  console.log(lastChar)
  const operators = ["+", "-", "*", "/",];

  if (display.value === "Error" || display.value === "NaN") {
    display.value = "";
  }
  if (value === "%") {
    if (display.value === "") {
      return;
    }

  display.value = parseFloat(display.value) / 100;
  return;
  }

  if (operators.includes(value) && operators.includes(lastChar)) {
    display.value = "Error";
    return;
  }

  if (value === ".") {
    const parts = display.value.split(/[+\-*\/]/);
    const currentNumber = parts[parts.length - 1];

    if (currentNumber.includes(".")) {
      return;
    }
  }
  display.value += value
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  if (display.value === "Error") {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculateResult() {
  try {
    const result = eval(display.value);
    console.log(result, "before calculation")

    if (result === Infinity || result === -Infinity || isNaN(result)) {
      console.log(result, "inside error")
      display.value = "Error";
    } else {
        console.log(result, "the result")

      display.value = result;
    }
  } catch {
    console.log("inside catch")

    display.value = "Error";
  }
}




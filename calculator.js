var current = [];
var previous = []
var isFloat = false;

$("button").click(function () {
  if (this.id === "clear") {
    current = [];
    previous = [];
    isFloat = false;
    current.push("0");
    setDisplay();
  } else if (
    this.id !== "divide" &&
    this.id !== "multiply" &&
    this.id !== "add" &&
    this.id !== "subtract" &&
    this.id !== "equals") {
    if (current[0] === "0") {
      current.shift();
      current.push(this.id);
      setDisplay();
    } else if (this.id === '.') {
      isFloat = true;
      current.push(this.id);
    } else {
      current.push(this.id);
      setDisplay();
    }
  } else if (
    this.id == "divide" ||
    this.id == "multiply" ||
    this.id == "add" ||
    this.id == "subtract") {
    previous.push(current.join(''));
    previous.push(this.id);
    current = [];
  } else if (this.id == "equals") {
    previous.push(current.join(''));
    equals(previous);
  }
});

function equals(operationArray) {
  var total;
  if (!isFloat) {
    var total = parseInt(operationArray.shift());
    for (var i = 0; i < operationArray.length; i++) {
      if (operationArray[i] === "divide") {
        total = total / parseInt(operationArray[i + 1]);
      } else if (operationArray[i] === "multiply") {
        total = total * parseInt(operationArray[i + 1]);
      } else if (operationArray[i] === "add") {
        total = total + parseInt(operationArray[i + 1]);
      } else if (operationArray[i] === "subtract") {
        total = total - parseInt(operationArray[i + 1])
      }
    }
  } else {
    var total = parseFloat(operationArray.shift());
    for (var i = 0; i < operationArray.length; i++) {
      if (operationArray[i] === "divide") {
        total = total / parseFloat(operationArray[i + 1]);
      } else if (operationArray[i] === "multiply") {
        total = total * parseFloat(operationArray[i + 1]);
      } else if (operationArray[i] === "add") {
        total = total + parseFloat(operationArray[i + 1]);
      } else if (operationArray[i] === "subtract") {
        total = total - parseFloat(operationArray[i + 1])
      }
  }
}

current = [total.toString()];
previous = [];
setDisplay();
}

function setDisplay() {
  document.getElementById('display').innerHTML = current.join('');

}





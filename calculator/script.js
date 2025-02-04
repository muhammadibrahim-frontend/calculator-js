function appendValue(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculateResult() {
  const display = document.getElementById("display");
  display.value = Function("return " + display.value)() || "Error";
}

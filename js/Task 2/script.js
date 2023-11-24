document.getElementById("btn").addEventListener("click", () => {
  let firstValue = parseFloat(document.getElementById("first_value").value);
  let secondValue = parseFloat(document.getElementById("second_value").value);
  if (typeof firstValue === "number" && typeof secondValue === "number") {
    document.getElementById("result").innerHTML = firstValue + secondValue;
  } else {
    alert("Please enter a valid number");
  }
});

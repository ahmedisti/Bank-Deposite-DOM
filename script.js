"use strict";

const siginIn = document.getElementById("sign-in");
const trasictionMoney = document.getElementById("transiction");

siginIn.addEventListener("click", function () {
  siginIn.style.display = "none";
  trasictionMoney.style.display = "block";
});

function getInput(id) {
  const depositId = document.getElementById(id).value;
  const dipositeParseValue = parseFloat(depositId);
  return dipositeParseValue;
}

let totalValue = document.getElementById("toalAmount").innerText;

const depositeEntry = document.getElementById("depositeEntry");
depositeEntry.addEventListener("click", function () {
  const dipoValue = getInput("depositeMoney");
  currentvalue("depositeAmount", dipoValue);
  currentvalue("toalAmount", dipoValue);
  document.getElementById("depositeMoney").value = "";
});

const withOut = document.getElementById("withdrawOut");
withOut.addEventListener("click", function () {
  const withValue = getInput("withdrawMoney");
  currentvalue("withdrawAmount", withValue);
  currentvalue("toalAmount", -1 * withValue);
  document.getElementById("withdrawMoney").value = "";
});

function currentvalue(id, depositeNum) {
  const current = document.getElementById(id).innerText;
  console.log(current);
  const currentNumber = parseFloat(current);
  console.log(currentNumber);
  console.log("dep" + depositeNum);
  const totalAmt = depositeNum + currentNumber;
  console.log();
  document.getElementById(id).innerText = totalAmt;
}

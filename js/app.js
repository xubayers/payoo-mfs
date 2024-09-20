import moneyCalculate from "./moneyCalc.js";

// main balance
let balance = document.querySelector("#balance");

// cashIn cashOut toggle
const cashIn = document.querySelector("#cashin");
const cashOut = document.querySelector("#cashout");

const cashinForm = document.querySelector("#cashinform");
const cashOutForm = document.querySelector("#cashoutform");

cashIn.addEventListener("click", () => toggle(cashinForm, cashOutForm));

cashOut.addEventListener("click", () => toggle(cashOutForm, cashinForm));

function toggle(currentForm, remobleForm) {
  currentForm.classList.remove("hidden");
  remobleForm.className === "hidden"
    ? null
    : remobleForm.classList.add("hidden");
}

// add money happening
const moneyAmount = document.querySelector("#money-amount");
const addMoneyPin = document.querySelector("#add-money-pin");

const addMoneyBtn = document.querySelector("#add-money-btn");

addMoneyBtn.addEventListener("click", (e) => {
  moneyCalculate(e, moneyAmount, addMoneyPin, balance);
});

// cash out money
const cashoutMoneyAmount = document.querySelector("#cashout-money");
const cashOutMoneyPin = document.querySelector("#cashout-pin");

const cashOutBtn = document.querySelector("#cashout-money-btn");
cashOutBtn.addEventListener("click", (e) => {
  moneyCalculate(e, cashoutMoneyAmount, cashOutMoneyPin, balance);
});

import moneyCalculate from "./moneyCalc.js";
import querySelector from "./querySelector.js";
import sectionManagemant from "./sectionMangemnet.js";
// main balance
let balance = querySelector("#balance");

// section toggle
querySelector("#section-container").addEventListener("click", (e) =>
  sectionManagemant(e)
);

// add money happening
const moneyAmount = querySelector("#money-amount");
const addMoneyPin = querySelector("#add-money-pin");

const addMoneyBtn = querySelector("#add-money-btn");

addMoneyBtn.addEventListener("click", (e) => {
  moneyCalculate(e, moneyAmount, addMoneyPin, balance);
});

// cash out money
const cashoutMoneyAmount = querySelector("#cashout-money");
const cashOutMoneyPin = querySelector("#cashout-pin");

const cashOutBtn = querySelector("#cashout-money-btn");
cashOutBtn.addEventListener("click", (e) => {
  moneyCalculate(e, cashoutMoneyAmount, cashOutMoneyPin, balance);
});

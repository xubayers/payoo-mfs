let dataBase = [{ num: "01346", pin: "46" }];

export default function moneyCalculate(event, money, pin, balance) {
  event.preventDefault();

  //
  if (!isFinite(parseInt(money.value)) || !isFinite(parseInt(pin.value))) {
    money.value = "";
    pin.value = "";
    alert("You must type a valid input!");
  }

  for (let data of dataBase) {
    if (pin.value === data.pin) {
      if (event.target.innerText === "Add Money") {
        addMoney(money.value, balance);
      } else {
        cashOutMoney(money.value, balance);
      }
      money.value = "";
      pin.value = "";
    }
  }
}

function addMoney(money, currentBalnce) {
  currentBalnce.innerText =
    parseFloat(currentBalnce.innerText) + parseFloat(money);
}

function cashOutMoney(money, currentBalnce) {
  currentBalnce.innerText =
    parseFloat(currentBalnce.innerText) - parseFloat(money);
}

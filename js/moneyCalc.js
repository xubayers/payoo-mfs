import querySelector from "./querySelector.js";

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

  // add transection history
  let nowDate = new Date();

  let component = document.createElement("p");
  component.innerHTML = `<p class="text-xs bg-green-900 px-2 py-1 rounded-md">Add money ${
    currentBalnce.innerText
  } tk at -         ${nowDate.getHours()}:${nowDate.getMinutes()} </p>`;

  querySelector("#transHisStore").appendChild(component);
}

function cashOutMoney(money, currentBalnce) {
  if (parseFloat(currentBalnce.innerText) < parseFloat(money)) {
    alert("you dont have enought money to cashout");
    return;
  }
  currentBalnce.innerText =
    parseFloat(currentBalnce.innerText) - parseFloat(money);

  // add transection history
  let nowDate = new Date();

  let component = document.createElement("p");
  component.innerHTML = `<p class="text-xs bg-orange-900 px-2 py-1 rounded-md">Withrow ${
    currentBalnce.innerText
  } tk at -        ${nowDate.getHours()}:${nowDate.getMinutes()} </p>`;

  querySelector("#transHisStore").appendChild(component);
}

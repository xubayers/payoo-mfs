// log in form validation

const loginBtn = document.querySelector("#login-btn");
const mobileNumber = document.querySelector("#mobile-number");
const pinNumber = document.querySelector("#pin-number");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let disits = "1234567890";
  for (let disit of mobileNumber.value) {
    if (!disits.includes(disit)) {
      alert("invalid mobile number: " + mobileNumber.value);
      mobileNumber.value = "";
      pinNumber.value = "";
      return;
    }
  }

  if (pinNumber.value === "1234") {
    window.location.assign("http://127.0.0.1:5500/home.html");
  } else {
    alert("wrong pin");
  }
  mobileNumber.value = "";
  pinNumber.value = "";
});

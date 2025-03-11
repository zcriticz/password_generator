let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#input-value");
let password = document.querySelector("#password");

let passwordContainer = document.querySelector("#password-container");
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let passwordLength = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    passwordLength += charset.charAt(Math.floor(Math.random() * n));
  }

  passwordContainer.classList.remove("hide");
  password.innerHTML = passwordLength;
  newPassword = passwordLength;
}

function copyPassword() {
  alert("Password Copied!");
  navigator.clipboard.writeText(newPassword);
}

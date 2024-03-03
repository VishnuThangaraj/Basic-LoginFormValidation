// Input Fields

const email_field = document.getElementById(`user-email`);
const password_field = document.getElementById(`user-password`);
let emailFail = true,
  passwordFail = true;

// Warning and Success Message

const email_warning = document.getElementById(`email_warning`);
const password_warning = document.getElementById(`password_warning`);
const success_message = document.getElementById(`success_msg`);

// Input Field Evenhandlers

email_field.addEventListener("change", emailValidation);
password_field.addEventListener("change", passwordValidation);

// Email Validation Function
function emailValidation(event) {
  let emailVal = email_field.value;
  if (
    emailVal.length <= 3 ||
    !emailVal.includes("@") ||
    !emailVal.includes(`.`)
  ) {
    email_warning.innerHTML = "Min 3 characters, include @ and (.)";
    emailFail = true;
  } else {
    emailFail = false;
    email_warning.innerHTML = "";
  }
  allGoodValidation();
}

// Password Validation Function
function passwordValidation(event) {
  if (password_field.value.length < 8) {
    password_warning.innerHTML = "Min 8 characters";
    passwordFail = true;
  } else {
    passwordFail = false;
    password_warning.innerHTML = "";
  }
  allGoodValidation();
}

// Function to add All good messasge if email and password is valid
function allGoodValidation() {
  if (!emailFail && !passwordFail) {
    success_message.innerHTML = "All Good";
  } else {
    success_message.innerHTML = "";
  }
}

// Login Button Function
function validateLogin() {
  if (!emailFail && !passwordFail) {
    if (userConfirmation()) {
      alert("Login Successful");
    }
  } else {
    window.location.href = window.location.href;
  }
}

// Additional confirmation dialogue box
// function userConfirmation() {
//   window.innerHTML = "<div>hello mr </div>";
// }

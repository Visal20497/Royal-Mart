let button = document.getElementById("button");
let names = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let mobile = document.getElementById("mobile");
let msg = document.getElementById("msg");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let cpassError = document.getElementById("cpassError");
let mobileError = document.getElementById("mobileError");
let msgError = document.getElementById("msgError");

button.addEventListener("click", () => {
    let isValid = false;
nameError.innerText = "";
emailError.innerText = "";
passError.innerText = "";
cpassError.innerText = "";
mobileError.innerText = "";
msgError.innerText = "";
  if (
    !names.value ||
    !email.value ||
    !pass.value ||
    !cpass.value ||
    !mobile.value ||
    !msg.value
  ) {
    console.log("hello i am error");
    isValid = false;
    nameError.innerText = "All Fiels Are Requireds*";
    emailError.innerText = "All Fiels Are Requireds*";
    passError.innerText = "All Fiels Are Requireds*";
    cpassError.innerText = "All Fiels Are Requireds*";
    mobileError.innerText = "All Fiels Are Requireds*";
    msgError.innerText = "All Fiels Are Requireds*";
  } else if (!(names.value.length > 6)) {
    isValid = false;
    nameError.innerText = "name must be grater than 6";
  } else if (!(pass.value === cpass.value)) {
    isValid = false;
    cpassError.innerText = "password and confirm password must have same";
  } else if (!(mobile.value.length == 10)) {
    isValid = false;
    mobileError.innerText = "must 10";
  } else if (!(mobile.value.toString()[0] == "9")) {
    isValid = false;
    mobileError.innerText = "number must start with 9";
  } else {
    console.log('hello')
    isValid = true;
  }

  if (isValid) {
    alert("form is submit successful");
  } else {
    console.log("somthing wrong");
  }
});

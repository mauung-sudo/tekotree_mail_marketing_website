const frmNameInput = document.getElementById("frmName");
const frmEmailInput = document.getElementById("frmEmail");

frmNameInput.addEventListener("input", validateNameInput);
frmEmailInput.addEventListener("input", validateEmailInput);

function validateNameInput() {
  const name = frmNameInput.value;
  const frmNameError = document.getElementById("frmNameError");

  frmNameError.innerHTML = "";

  if (name === "") {
    frmNameError.innerHTML = "Name is empty";
    frmNameInput.style.borderColor = "#e23636";
  } else {
    frmNameInput.style.borderColor = "green";
  }
}

function validateEmailInput() {
  const email = frmEmailInput.value;
  const frmEmailError = document.getElementById("frmEmailError");
  frmEmailError.innerHTML = "";
  const emailRegex = /\S+@\S+\.\S+/;

  if (email === "") {
    frmEmailError.innerHTML = "Email is empty";
    frmEmailInput.style.borderColor = "#e23636";
  } else if (!emailRegex.test(email)) {
    frmEmailError.innerHTML = "Invalid email format";
    frmEmailInput.style.borderColor = "#e23636";
  } else {
    frmEmailInput.style.borderColor = "green";
  }
}

function onSubmitForm() {
  validateEmailInput();
  validateNameInput();
  
  if (frmNameError.innerHTML === "" && frmEmailError.innerHTML === "") {
    console.log("success");

    // TODO: Start writing here
    console.log("form is submitted");
    document.getElementById("subscribeForm").submit();
  }
}

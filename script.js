function validateForm() {
  const name = document.getElementById("frmName").value;
  const email = document.getElementById("frmEmail").value;

  function sanitizeInput(name) {
    // Allow only alphanumeric characters for names
    return name.replace(/[^a-zA-Z0-9]/g, "");
  }

  const frmNameError = document.getElementById("frmNameError");
  const frmEmailError = document.getElementById("frmEmailError");

  frmNameError.innerHTML = ""; // Clear previous error messages
  frmEmailError.innerHTML = "";

  if (name === "") {
    frmNameError.innerHTML = "Name is empty";
    document.getElementById("frmName").style.borderColor = "#e23636";
  }

  if (email === "") {
    frmEmailError.innerHTML = "Email is empty";
    document.getElementById("frmEmail").style.borderColor = "#e23636";
  } else if (!validateEmail(email)) {
    frmEmailError.innerHTML = "Invalid email format";
    document.getElementById("frmEmail").style.borderColor = "#e23636";
  }

  if (frmNameError.innerHTML === "" && frmEmailError.innerHTML === "") {
    // Submit the form (you might want to do an AJAX call here)
    console.log(sanitizeInput(name));

    //TODO: start writing here
    console.log("form is submitted");
    document.getElementById("subscribeForm").submit();
  }
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

//disable right click event
document.addEventListener("contextmenu", (event) => event.preventDefault());

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

    console.log("form is submitted");
    const apiUrl = "http://mail.hugsports.space:8000/subscribe/";

    const data = {
      Email: frmEmailInput.value,
      Username: frmNameInput.value,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        frmNameInput.value = "";
        frmEmailInput.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

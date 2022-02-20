
document.getElementById("modal_btn").onclick = function(){
  document.getElementById("modal1").style.display = 'block';
}

document.getElementById("close1").onclick = function(){
  document.getElementById("modal1").style.display = 'none';
}

document.getElementById("create_account").onclick= function(){
  document.getElementById("modal2").style.display='block';
  document.getElementById("modal1").style.display = 'none';
}
document.getElementById("close2").onclick = function(){
  document.getElementById("modal2").style.display = 'none';
}



function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const createAccountForm = document.querySelector("#createAccount");
  const loginForm = document.querySelector("#login");
 

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  // loginForm.addEventListener("submit", e => {
  //     e.preventDefault();

  //     // Perform your AJAX/Fetch login

  //     setFormMessage(loginForm, "error", "Invalid username/password combination");
  // });

  document.querySelectorAll(".form_input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});


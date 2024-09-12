import { modalTemplate } from "../components/modal/modal.js";

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const verified = dataValidation();

  if (!verified) {
    return;
  }

  const formData = new FormData(form);
  const userEmail = formData.get("email");
  const emailInput = document.querySelector("#email");
  emailInput.value = "";
  
  const send = fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  });

  send.then((response) => {
    if (!response.ok) {
      return;
    }
    renderModal(userEmail);
  });
}

function dataValidation() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.querySelector("#email");
  const emailValue = emailInput.value.trim();
  const isValidEmail = EMAIL_REGEX.test(emailValue);
  const error = document.querySelector("#error");

  if (!emailValue) {
    error.hidden = false;
    return;
  }
  if (!isValidEmail) {
    error.hidden = false;
    return;
  }

  error.hidden = true;

  return true;
}

function renderModal(userEmail) {
  const modal = modalTemplate();
  modal.querySelector(".modal__email").textContent = userEmail;
  document.querySelector(".page").style.display = "none";
  document.body.append(modal);
  modal.querySelector(".modal__button").onclick = function () {
    modal.remove();
    document.querySelector(".page").style.display = "block";
  };
}

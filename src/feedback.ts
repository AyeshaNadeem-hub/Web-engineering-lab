
import { getRequired } from "./utils.js";

const form = getRequired<HTMLFormElement>("#feedback-form");
const status = getRequired<HTMLParagraphElement>("#status");

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const nameInput = getRequired<HTMLInputElement>("#name", form);
  const emailInput = getRequired<HTMLInputElement>("#email", form);

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  status.classList.remove("error");

  if (name === "" || !email.includes("@")) {
    status.textContent = "Please enter a valid name and email.";
    status.classList.add("error");
    return;
  }

  status.textContent = `Thank you, ${name}! Your feedback has been submitted.`;

  form.reset();
});

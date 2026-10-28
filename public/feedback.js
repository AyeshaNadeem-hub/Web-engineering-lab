import { getRequired } from "./utils.js";
const form = getRequired("#feedback-form");
const status = getRequired("#status");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = getRequired("#name", form);
    const emailInput = getRequired("#email", form);
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

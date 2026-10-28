
import {
  delay,
  makeCounter,
  getRequired,
  describeSlot,
  type Slot,
} from "./utils.js";

interface Feedback {
  name: string;
  email: string;
}

const nextId = makeCounter();

const form = getRequired<HTMLFormElement>("#feedback-form");
const status = getRequired<HTMLParagraphElement>("#status");

const sampleSlot = {
  id: 1,
  title: "Web Engineering",
  time: "10:00 AM",
  booked: false,
  room: "Lab 2",
};

const typedSlot: Slot = sampleSlot;

console.log(describeSlot(typedSlot));

form.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();

  const nameInput = getRequired<HTMLInputElement>("#name", form);
  const emailInput = getRequired<HTMLInputElement>("#email", form);

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || !email.includes("@")) {
    status.textContent = "Please enter a valid name and email.";
    status.classList.add("error");
    return;
  }

  const feedback: Feedback = {
    name,
    email,
  };

  status.classList.remove("error");
  status.textContent = `Thank you, ${feedback.name}! Feedback #${nextId()} submitted.`;

  await delay(400);
  form.reset();
});

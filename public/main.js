import { delay, makeCounter, getRequired, describeSlot, } from "./utils.js";
const nextId = makeCounter();
const form = getRequired("#feedback-form");
const status = getRequired("#status");
const sampleSlot = {
    id: 1,
    title: "Web Engineering",
    time: "10:00 AM",
    booked: false,
    room: "Lab 2",
};
const typedSlot = sampleSlot;
console.log(describeSlot(typedSlot));
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameInput = getRequired("#name", form);
    const emailInput = getRequired("#email", form);
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (name === "" || !email.includes("@")) {
        status.textContent = "Please enter a valid name and email.";
        status.classList.add("error");
        return;
    }
    const feedback = {
        name,
        email,
    };
    status.classList.remove("error");
    status.textContent = `Thank you, ${feedback.name}! Feedback #${nextId()} submitted.`;
    await delay(400);
    form.reset();
});

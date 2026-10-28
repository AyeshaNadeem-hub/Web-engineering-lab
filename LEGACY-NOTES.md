Native JavaScript Equivalents
1. $(document).ready(fn)
document.addEventListener("DOMContentLoaded", fn);
2. $("#name").val()
document.querySelector("#name").value;
3. .after(html)
element.insertAdjacentHTML("afterend", html);
4. $(".error").remove()
document.querySelectorAll(".error").forEach((element) => element.remove());
5. .text(...).hide().fadeIn(400)
element.textContent = message;
element.style.display = "block";
6. $form[0].reset()
form.reset();
Three Legacy Smells
1. Using var:
Modern JavaScript uses const and let instead of var.

2. Using $.trim():
Modern JavaScript uses the trim() method.

3. Using indexOf("@") === -1:
Modern JavaScript uses includes("@") to check whether a string contains @.

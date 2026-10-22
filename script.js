// Use Web Crypto with rejection sampling. Never log generated values.
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alert-container");
const PASSWORD_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_[]{}";
let feedbackTimer;
alertcontainer.classList.remove("active");
alertcontainer.setAttribute("role", "status");
alertcontainer.setAttribute("aria-live", "polite");
copyIconEl.setAttribute("role", "button");
copyIconEl.setAttribute("tabindex", "0");
copyIconEl.setAttribute("aria-label", "Copy generated password");
function feedback(message) {
  clearTimeout(feedbackTimer);
  alertcontainer.textContent = message;
  alertcontainer.classList.add("active");
  feedbackTimer = setTimeout(() => alertcontainer.classList.remove("active"), 2000);
}
function createPassword() {
  if (!globalThis.crypto || typeof crypto.getRandomValues !== "function") {
    inputEl.value = "";
    feedback("Secure random generation is unavailable in this browser.");
    return;
  }
  const limit = 256 - (256 % PASSWORD_CHARS.length);
  let password = "";
  const bytes = new Uint8Array(32);
  while (password.length < 14) {
    crypto.getRandomValues(bytes);
    for (const byte of bytes) {
      if (byte < limit) password += PASSWORD_CHARS[byte % PASSWORD_CHARS.length];
      if (password.length === 14) break;
    }
  }
  inputEl.value = password;
  alertcontainer.classList.remove("active");
}
async function copyPassword() {
  if (!inputEl.value) { feedback("Generate a password first."); return; }
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(inputEl.value);
    } else {
      inputEl.select();
      inputEl.setSelectionRange(0, inputEl.value.length);
      if (!document.execCommand("copy")) throw new Error("Copy failed");
    }
    feedback("Password copied.");
  } catch {
    feedback("Copy failed. Select and copy the password manually.");
  }
}
btnEl.addEventListener("click", createPassword);
copyIconEl.addEventListener("click", copyPassword);
copyIconEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    copyPassword();
  }
});

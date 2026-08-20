const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alert-container");

copyIconEl.addEventListener("click", (e) => {
  copyPassword();
  if (inputEl.value) {
     alertcontainer.classList.add("active");
setTimeout(() => {
  alertcontainer.classList.remove("active");
}, 2000);
  }
});

btnEl.addEventListener("click", (e) => {
  createPassword();
});
function createPassword() {
  const chars =
    "0123456789asdfghjklqwertyuiopzxcvbnm ~!@#$%^&*()_[]{} ASDFGHJKLQWERTYUIOPZXCVBNM";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
  }
  inputEl.value = password;
  alertcontainer.innerHTML = password + "copied";
}
function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(inputEl.value);
  } else {
    document.execCommand("copy");
  }
}

const GenerateButton = document.getElementById("generateButton");
const CopyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

GenerateButton.onclick = function generatePassword() {
  const character =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$&'()*+,_-";
  const passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let generate = Math.floor(Math.random() * character.length);
    password += character.substring(generate, generate + 1);
  }
  passwordInput.value = password;
};
CopyButton.onclick = function copyPassword() {
  const passwordValue = passwordInput.value;
  if (passwordValue.trim() === "") {
    alert("Password is empty. Generate a new password");
  } else {
    navigator.clipboard.writeText(passwordValue).then(function () {
      show.innerHTML = "Your new password: " + passwordValue;
      show.classList.add("active");
      setTimeout(() => {
        show.classList.remove("active");
      }, 2000);
      passwordInput.value = "";
    });
  }
};

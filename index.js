const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const bodyEl = document.querySelector("body");
const containerEl = document.getElementById("container");
const titleEl = document.getElementById("title");
const titleGreenEl = document.getElementById("title-green");
const subtitleEl = document.getElementById("subtitle");
const hrEl = document.querySelector("hr");
const copiedEl = document.getElementById("copied");
const lightDarkModeBtnEl = document.getElementById("light-dark-mode-btn");

const generatedPasswordBtn1 = document.getElementById("generated-password-btn-1");
const generatedPasswordBtn2 = document.getElementById("generated-password-btn-2");

let password1 = "";
let password2 = "";

function changeDarkLightMode() {
  if (lightDarkModeBtnEl.textContent === "🌙") {
    lightDarkModeBtnEl.textContent = "☀️";

    document.documentElement.style.setProperty('--main-bg-color', '#ECFDF5');
    document.documentElement.style.setProperty('--main-title-color', '#2B283A');
    document.documentElement.style.setProperty('--secondary-title-color', '#10B981');
    document.documentElement.style.setProperty('--text-color', '#6B7280');
    document.documentElement.style.setProperty('--hr-color', '#D5D4D8');
  }
  else {
    lightDarkModeBtnEl.textContent = "🌙"; 

    document.documentElement.style.setProperty('--main-bg-color', '#1F2937');
    document.documentElement.style.setProperty('--main-title-color', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary-title-color', '#4ADF86');
    document.documentElement.style.setProperty('--text-color', '#D5D4D8');
    document.documentElement.style.setProperty('--hr-color', '#2F3E53');
  }
}

function generatePasswords() {

  password1 = generateRandomPassword();
  password2 = generateRandomPassword();

  if (password1.length > 15) {
    generatedPasswordBtn1.textContent = password1.slice(0, 15) + "..."
  }
  else {
    generatedPasswordBtn1.textContent = password1;
  }

  if (password2.length > 15) {
    generatedPasswordBtn2.textContent = password2.slice(0, 15) + "..."
  }
  else {
    generatedPasswordBtn2.textContent = password2;
  }
}

function generateRandomPassword() {
  let password = "";
  copiedEl.textContent = "";

  let passwordLength = document.getElementById("password-length").value;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSymbols = document.getElementById("symbols").checked;

  let array = [];

  array.push(...letters);

  if (includeNumbers) {
    array.push(...numbers);
  }

  if (includeSymbols) {
    array.push(...symbols);
  }

  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    password += array[randomIndex];
  }

  return password;
}

function copyFirstButtonToClipboard() {
  if (password1 === "") return;

  navigator.clipboard.writeText(password1).then(() => {
    copiedEl.textContent = "copied!";
  }); 
}

function copySecondButtonToClipboard() {
  if (password2 === "") return;

  navigator.clipboard.writeText(password2).then(() => {
    copiedEl.textContent = "copied!";
  }); 
}

function handlePasswordLengthChange(input) {
  if (input.value < 0) input.value = 0;
  if (input.value > 99) input.value = 99;
}
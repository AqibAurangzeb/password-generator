const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const bodyEl = document.querySelector("body");
const containerEl = document.getElementById("container");
const titleGreenEl = document.getElementById("title-green");
const subtitleEl = document.getElementById("subtitle");
const hrEl = document.querySelector("hr");
const lightDarkModeBtnEl = document.getElementById("light-dark-mode-btn");

const generatedPasswordBtn1 = document.getElementById("generated-password-btn-1");
const generatedPasswordBtn2 = document.getElementById("generated-password-btn-2");

const passwordLength = 15;

function changeDarkLightMode() {
  if (lightDarkModeBtnEl.textContent === "🌙") {
    lightDarkModeBtnEl.textContent = "☀️";
    lightDarkModeBtnEl.style.background = "#ECFDF5";
    
    bodyEl.style.color = "#2B283A";
    containerEl.style.background = "#ECFDF5";
    titleGreenEl.style.color = "#10B981";
    subtitleEl.style.color = "#6B7280";
    hrEl.style.border = "1px solid #D5D4D8"
  }
  else {
    lightDarkModeBtnEl.textContent = "🌙"; 
    lightDarkModeBtnEl.style.background = "#1F2937";

    bodyEl.style.color = "#FFFFFF";
    containerEl.style.background = "#1F2937";
    titleGreenEl.style.color = "#4ADF86";
    subtitleEl.style.color = "#D5D4D8";
    hrEl.style.border = "1px solid #2F3E53"
  }
}

function generatePasswords() {
  generatedPasswordBtn1.textContent = generateRandomPassword()
  generatedPasswordBtn2.textContent = generateRandomPassword()
}

function generateRandomPassword() {
  let password = "";

  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

function copyFirstButtonToClipboard() {
  let buttonEl = document.getElementById("generated-password-btn-1");

  navigator.clipboard.writeText(buttonEl.textContent).then(() => {
    alert("Copied to clipboard");
  }); 
}

function copySecondButtonToClipboard() {
  let buttonEl = document.getElementById("generated-password-btn-2");

  navigator.clipboard.writeText(buttonEl.textContent).then(() => {
    alert("Copied to clipboard");
  }); 
}
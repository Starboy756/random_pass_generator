function copyText(event) {
    event.preventDefault();
    let input = document.getElementById("myInput");
    let text = input.value;


  if (!text) {
    showToast("Nothing to copy!");
    return;
  }

    input.select();
    input.setSelectionRange(0,9999);
    
    navigator.clipboard.writeText(text)
    .then(() => {
        showToast("Copied: " + text)
    })
    .catch((err) => {
        console.error("Error Copying Text! " , err)
        showToast("Failed to Copy")
    })

}

function showToast(message) {
    let toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";

    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

function generatePassword(length,includeUpperCase,includeLowerCase,includeSpecial,includeNumbers) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeSpecial ? symbolChars : "";
    allowedChars += includeNumbers ? numberChars : "";

    if(length<=0) {
        return `(Password Must be Atleast 1 Character)`
    }

    if(allowedChars.length === 0 ){
        return `(atleast one character of character must be selected)`
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
const capital = document.getElementById("capitalL")
const special = document.getElementById("specialL")
const numbers = document.getElementById("numbersL")
const small = document.getElementById("smallL")

const passwordLength = 8;


let includeUpperCase = true;
const includeLowerCase = true;
const includeSpecial = true;
const includeNumbers = true;

const password = generatePassword(passwordLength,includeUpperCase,includeLowerCase,includeSpecial,includeNumbers);

const myInput = document.getElementById("myInput").value = password;

console.log(`Generated Password: ${password}`)



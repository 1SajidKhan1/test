let characters = [
" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",
"0","1","2","3","4","5","6","7","8","9",
":",";","<","=",">","?",
"@",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"[","\\","]","^","_",
"`",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"{","|","}","~"
];
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");

function generatePassword() {
    password1.textContent = "";
    password2.textContent = "";
    for(let i=0; i<15; i++) {
        password1.textContent += characters[Math.floor(Math.random() * characters.length)];
        password2.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
    console.log("Passwords Generated");
}
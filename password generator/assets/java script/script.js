


document.querySelector("#generate-pass").addEventListener("click",function(length){
       
// Generates random password
var length = document.querySelector("#length").value;
var characters = '0123456789';
var result = '';

var length = document.querySelector("#length").value;


if(document.querySelector("#uppercase-letters").checked){
     characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

if(document.querySelector("#lowercase-letters").checked){
     characters = '0123456789abcdefghijklmnopqrstuvwxyz';
}

if(document.querySelector("#uppercase-letters").checked && document.querySelector("#lowercase-letters").checked){
     characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

if(document.querySelector("#special-char").checked){
     characters = '0123456789!@#s$%^&*()_-+={}[];:"/?.>,<*`~';
}

if(document.querySelector("#uppercase-letters").checked && document.querySelector("#special-char").checked){
     characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#s$%^&*()_-+={}[];:"/?.>,<*`~';
}

if(document.querySelector("#lowercase-letters").checked && document.querySelector("#special-char").checked){
     characters = '0123456789abcdefghijklmnopqrstuvwxyz!@#s$%^&*()_-+={}[];:"/?.>,<*`~';
}

if(document.querySelector("#lowercase-letters").checked && document.querySelector("#uppercase-letters").checked && document.querySelector("#special-char").checked){
     characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#s$%^&*()_-+={}[];:"/?.>,<*`~';
}

for(var x = 0;x<= length;x++){
    result += characters.charAt(Math.floor(Math.random()*characters.length));
}

// change text to the value of result
 document.querySelectorAll(".main")[0].children[0].textContent = result;


//  copy to clipboard
 document.querySelector("#copy-pass").addEventListener("click",function(){
     var txt =  document.querySelectorAll(".password")[0].children[0];
     navigator.clipboard.writeText(result);
});


});


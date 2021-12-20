let inp = document.getElementById("numb");
      
let btn = document.createElement("button");


btn.innerText = "submit";

let oup = document.createElement("p");
let div = document.getElementById("container");
div.appendChild(btn);
div.appendChild(oup);

btn.addEventListener("click", pattern1);

function pattern1() {
    var n = parseInt(inp.value);
  if (n % 2 == 0) {
    alert("Please Enter Only Odd Number");
  }
  let string = "";
  
  for (let i = 1; i <= Math.ceil(n/2); i++) {

for (let j = n; j > i; j--) {

  string += " ";

}
for (let k = 0; k < i * 2 - 1; k++) {
  string += "*";
}
string += "<br>";
}

for (let i = Math.ceil(n/2)-1; i >=1; i--) {
for (let j = n; j > i; j--) {
  string += " ";
}
for (let k = 0; k < i * 2 - 1; k++) {
  string += "*";
}
string += "<br>";
}

  
  oup.innerHTML=(`<pre>${string}</pre>`);
}


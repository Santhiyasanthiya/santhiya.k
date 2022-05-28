var div=document.createElement("div");

div.innerHTML=`<input type="txt" id="txt">
<button type="button" onclick="foo()">search</botton>
<div id ="active"></div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo(){

let cc=document.getElementById("txt").value;
let res= await fetch(`https://api.covid19api.com/total/dayone/country/${cc}`);    
let res1 =await res.json();
console.log(res1);

let index=res1.length-1;
var result =res1[index].Active;
console.log(result);
document.getElementById("active").innerText=`Total Active cases:${result}`; 

}







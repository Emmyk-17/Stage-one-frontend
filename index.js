//  const output = document.querySelector("pre");
//  const image = document.querySelector("img");

//     image.addEventListener("load", ()=>{
//     var x = image.naturalWidth;
//     var y = image.naturalHeight;

//    output.textContent = "Natural size: " + x + " x " + y + " pixels";
// })
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getUTCDay()];
document.getElementById("day").innerHTML = day;
let diff = d.toTimeString();
document.getElementById("timeZ").innerHTML = diff;

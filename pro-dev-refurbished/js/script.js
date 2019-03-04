let auditory = 3;
let visual = 5;
let tactile = 4;
let total = auditory + visual + tactile;
// document.write( "Denominator: " + total + "<br>");

let tactilePercent = Math.round(tactile/total*100);
let visualPercent = Math.round(visual/total*100);
let auditoryPercent = Math.round(auditory/total*100);
console.log("Auditory: " + auditoryPercent + "<br/>" + "Visual: " + visualPercent + "<br/>" + "Tactile: " + tactilePercent + "<br/>");

document.getElementById("tactile").innerText = tactilePercent.toString();
document.getElementById("visual").innerText = visualPercent.toString();
document.getElementById("auditory").innerText = auditoryPercent.toString();



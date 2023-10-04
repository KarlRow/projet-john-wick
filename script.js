const closeWindow = document.querySelector("buttononoff");
const viggoImg = document.querySelector("#viggoImg");
const iosefImg = document.querySelector("#iosef");
const santinoImg = document.querySelector("#santino");
const cassianImg = document.querySelector("#cassian");
const adjucatorImg = document.querySelector("#adjucator");
const zeroImg = document.querySelector("#zero");
const marquisImg = document.querySelector("#marquis");
const allVilains = document.querySelectorAll(".vilainsBlock img")

for (const img of allVilains) {
img.addEventListener('click',function(e) {
    if (window.getComputedStyle(e.target.nextElementSibling).display === "block"){
    e.target.nextElementSibling.nextElementSibling.style.display ="block"
    e.target.nextElementSibling.nextElementSibling.style.color ="#2953c7"
    e.target.nextElementSibling.style.display = "none"
    e.target.parentElement.style.flexDirection = "column"
    
    }
    else{
        e.target.nextElementSibling.nextElementSibling.style.display ="none"
        e.target.nextElementSibling.style.display = "block"
        e.target.parentElement.style.flexDirection = "row"
    }
 });
}
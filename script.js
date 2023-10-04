const closeWindow = document.querySelector("buttononoff");
const viggoImg = document.querySelector("#viggoImg");
const iosefImg = document.querySelector("#iosef");
const santinoImg = document.querySelector("#santino");
const cassianImg = document.querySelector("#cassian");
const adjucatorImg = document.querySelector("#adjucator");
const zeroImg = document.querySelector("#zero");
const marquisImg = document.querySelector("#marquis");
const allVilains = document.querySelectorAll(".vilainsBlock img")



/*closeWindow.addEventListener('click', function () {
    closeWindow.close();
 });*/
 
for (const img of allVilains) {
img.addEventListener('click',function(e) {
    if (window.getComputedStyle(e.target.nextElementSibling).display === "block"){
    e.target.nextElementSibling.nextElementSibling.style.display ="block"
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
//  iosefImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // iosefImg.align = left;
//     console.log("Iosef");
//  });
 
//  santinoImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // santinoImg.align = left;
//     console.log("Santino");
//  });
 
//  cassianImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // cassianImg.align = left;
//     console.log("Cassian");
//  });
 
//  adjucatorImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // adjucatorImg.align = left;
//     console.log("Adjucator");
//  });

//  zeroImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // zeroImg.align = left;
//     console.log("Zero");
//  });
 
//  marquisImg.addEventListener('click',function(e) {
//     e.preventDefault()
//     // marquisImg.align = left;
//     console.log("Marquis");
//  });
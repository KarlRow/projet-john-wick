const closeWindow = document.querySelector("buttononoff");
const viggoImg = document.querySelector("#viggoImg");
const iosefImg = document.querySelector("#iosef");
const santinoImg = document.querySelector("#santino");
const cassianImg = document.querySelector("#cassian");
const adjucatorImg = document.querySelector("#adjucator");
const zeroImg = document.querySelector("#zero");
const marquisImg = document.querySelector("#marquis");



/*closeWindow.addEventListener('click', function () {
    closeWindow.close();
 });*/

 viggoImg.addEventListener('click',function(e) {
    console.log(e.target.nextElementSibling.style.display)
    if (e.target.nextElementSibling.nextElementSibling.style.display === "initial"){
    e.target.nextElementSibling.nextElementSibling.style.display ="initial"
    e.target.nextElementSibling.style.display = "none"
    }
    else{
        e.target.nextElementSibling.nextElementSibling.style.display ="none"
        e.target.nextElementSibling.style.display = "initial"
    }
 });
 
 iosefImg.addEventListener('click',function(e) {
    e.preventDefault()
    // iosefImg.align = left;
    console.log("Iosef");
 });
 
 santinoImg.addEventListener('click',function(e) {
    e.preventDefault()
    // santinoImg.align = left;
    console.log("Santino");
 });
 
 cassianImg.addEventListener('click',function(e) {
    e.preventDefault()
    // cassianImg.align = left;
    console.log("Cassian");
 });
 
 adjucatorImg.addEventListener('click',function(e) {
    e.preventDefault()
    // adjucatorImg.align = left;
    console.log("Adjucator");
 });

 zeroImg.addEventListener('click',function(e) {
    e.preventDefault()
    // zeroImg.align = left;
    console.log("Zero");
 });
 
 marquisImg.addEventListener('click',function(e) {
    e.preventDefault()
    // marquisImg.align = left;
    console.log("Marquis");
 });
/*
    Student Name: Jiovany Martinez
    File Name: script.js
    Date: 10/28/2023
*/

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
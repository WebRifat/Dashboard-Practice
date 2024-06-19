let menuBtn = document.querySelector(".menu");
let body = document.querySelector("body");




function menuButton () {

    body.classList.add("active");

}


menuBtn.addEventListener("click", menuButton);


let cancelBtn = document.querySelector(".cancelBtn");
let sidebarBg = document.querySelector(".sidebar-Bg");


function cancelButton () {
    body.classList.remove("active");
}


cancelBtn.addEventListener("click", cancelButton);
sidebarBg.addEventListener("click", cancelButton);
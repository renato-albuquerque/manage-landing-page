// variables

const hamburgerMenu = document.querySelector(".hamburgerMenu")
const hamburgerMenuItems = document.querySelector(".hamburgerMenuItems")
const container = document.querySelector(".container")
const shadowBody = document.querySelector("body")

// functions

function showMobileMenu() {
    hamburgerMenuItems.classList.toggle("open")
    shadowBody.classList.toggle("bgBody")
    
    if(hamburgerMenuItems.classList.contains("open")) {
        hamburgerMenu.src = "files/images/icon-close.svg"
        
    } else {
        hamburgerMenu.src = "files/images/icon-hamburger.svg"
    }
}
let menulink = document.querySelector(".menuLinks")
let allLink = document.querySelector(".allLinks")
let menuBtnIcon = document.querySelector("i")
menulink.addEventListener("click", function(){
  allLink.classList.toggle("active")
 
})
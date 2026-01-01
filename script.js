let menulink = document.querySelector(".menuLinks")
let allLink = document.querySelector(".allLinks")
let menuBtnIcon = document.querySelector("i")
menulink.addEventListener("click", function(){
  allLink.classList.toggle("active")
 
})
let button = document.querySelector("#btn")
button.addEventListener("mouseover", function(){
 const isActive = button.classList.toggle("active");
  // button.textContent = button.classList.contains("active")?"Selected":"Shop Now"
  button.textContent = isActive ? "Selected" :  " Shop Now"
})
let buttonTwo = document.querySelector("#flash-SaleBtn")
buttonTwo.addEventListener("mouseover", function(){
  const isActiveTwo = buttonTwo.classList.toggle("active");
  buttonTwo.textContent = isActiveTwo ? "Explore" : "Shop Now"
})
let buttonThree = document.querySelector("#btnThree")
buttonThree.addEventListener("mouseover", function(){
  const isActiveThree = buttonThree.classList.toggle("active");
  buttonThree.textContent = isActiveThree ? "Explore" : "Shop Now"
})
const themeToggle = document.querySelector(".theme-toggle")
const themeToggleBtn = document.querySelector(".theme-toggle-btn")
const modeText = document.querySelector(".modeText")
const moonIcon = document.querySelector(".fa-moon")
const sunIcon = document.querySelector(".fa-sun")
const body = document.body;

themeToggle.addEventListener("click", ()=>{
    themeToggleBtn.classList.toggle("active");

    if(themeToggleBtn.classList.contains("active")){
        body.classList.add("dark-mode");
        modeText.textContent = "to Light";
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
    }
    else{
        body.classList.remove("dark-mode")
        modeText.textContent = "to Dark";
        moonIcon.style.display = "inline-block";
        sunIcon.style.display = "none";
    }
})

// Menu Toggle
const toggleBox = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".bar");
const mobileNav = document.querySelector(".mobileNav");

toggleBox.addEventListener("click", ()=>{
    console.log("clicked")
    toggleBar.classList.toggle("active");

    if(toggleBar.classList.contains("active")){
        mobileNav.classList.add("active")
    }
    else{
        mobileNav.classList.remove("active")
    }
})

mobileNav.addEventListener("click", (e)=>{
    if(e.target !== mobileNav & e.target !== toggleBox){
        mobileNav.classList.remove("active")
    }
    else{
        mobileNav.classList.add("active")
    }
})

const hireBtn = document.querySelector(".hire-btn-2");
const modal = document.querySelector(".modal-bg");
const closeModal = document.querySelector(".fa-xmark");

hireBtn.addEventListener("click", ()=>{
    modal.classList.add("active");
})

closeModal.addEventListener("click", ()=>{
    modal.classList.remove("active")
})
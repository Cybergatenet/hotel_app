// Function to add border to the nav on scrolling
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        document.querySelector(".nav-box").style.borderBottom = "1px solid #326079"
        
    }else{
        document.querySelector(".nav-box").style.borderBottom = "none"
    }
})

// Hamburger menu function 
const hamburger = document.querySelector(".toggle")

const menu = () => {
       hamburger.addEventListener("click", () => {
            document.querySelector(".menu").classList.toggle("active")
            hamburger.classList.toggle("active")
       })
}
menu()

const removeMenu = () => {
    document.querySelectorAll(".nav-link").forEach(item =>{
        item.addEventListener("click", () => {
            document.querySelector(".menu").classList.remove("active")
            hamburger.classList.remove("active")
            
        })
    })
}
removeMenu()

// Display About Full View
const displayAboutFullView = () => {
    document.getElementById("about-full-view").classList.remove("hidden")
    document.getElementById("full-web").classList.add("hidden")
    document.getElementById("event-full-view").classList.add("hidden")

}

// Function for Booking 
const booking = () => {
    document.getElementById("booking").classList.remove("hidden")
    document.getElementById("full-web").classList.add("hidden")
    document.getElementById("about-full-view").classList.add("hidden")
    document.getElementById("event-full-view").classList.add("hidden")
    document.getElementById("dinning-full-view").classList.add("hidden")
}

// Function to display and hide Book Apartment and Order Food 
const orderFood = () => {
    document.getElementById("pastry-menu").classList.remove("hidden")
    document.getElementById("room-container").classList.add("hidden")
    document.querySelector(".successMsg").classList.add("hidden")

}

const BookRoom = () => {
    document.getElementById("pastry-menu").classList.add("hidden")
    document.getElementById("room-container").classList.remove("hidden")
    document.querySelector(".successMsg").classList.add("hidden")
}

// Function to display Booking Msg 
const pastry = document.querySelectorAll(".pastry-btn")
pastry.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#booking-form").classList.add("form-active")
        document.querySelector(".pastry-content").classList.add("hidden")
    })
})

// Function to display Dektol Event Center 
const displayEventCenter = () => {
    document.getElementById("event-full-view").classList.remove("hidden")
    document.getElementById("full-web").classList.add("hidden")
    document.getElementById("booking").classList.add("hidden")
    document.getElementById("about-full-view").classList.add("hidden")
    document.getElementById("dinning-full-view").classList.add("hidden")
}

// Function to display Dektol Dinning Center 
const displayDinningCenter = () => {
    document.getElementById("dinning-full-view").classList.remove("hidden")
    document.getElementById("full-web").classList.add("hidden")
    document.getElementById("booking").classList.add("hidden")
    document.getElementById("about-full-view").classList.add("hidden")
    document.getElementById("event-full-view").classList.add("hidden")
}

// Function to display the Home Page 
const displayHomePage = () => {
    document.getElementById("full-web").classList.remove("hidden")
    document.getElementById("dinning-full-view").classList.add("hidden")
    document.getElementById("booking").classList.add("hidden")
    document.getElementById("about-full-view").classList.add("hidden")
    document.getElementById("event-full-view").classList.add("hidden")
}


// Booking form Validation
const validateBookingForm  = () => {
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email")
    let address = document.getElementById("address")
    let productName = document.getElementById("productName")
    
    if(fullName.value.length && email.value.length && address.value.length && productName.value.length != ""){
        document.querySelector(".userName").innerHTML = fullName.value
        document.querySelector(".successMsg").classList.remove("hidden")
        document.querySelector("#booking-form").classList.remove("form-active")
        
    }
    
    
}

let ok = document.querySelector(".ok")
ok.addEventListener("click", () => {
    displayHomePage()
})
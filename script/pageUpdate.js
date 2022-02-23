// Fetching html data from htmlContent.json

fetch("../data/htmlContent.json").then((data) => {
    return data.json();

}).then((completedata) => {
    // Recreation 
    completedata.recreation.map(element => {
        document.getElementById("recreation").innerHTML += `
        <div class="col-md-4 d-flex justify-content-center position-relative">
            <div class="img-hover position-relative">
                <div class="first">
                    <img class="img-fluid" src="${element.img}">
                </div>
                <div class="lay position-absolute p-5 col-md-4">
                    <span class="transition position-relative">
                        <p class="h4 goldenColor text-font">${element.title}</p>
                        <hr class="bg-black1 py-1">
                        <p class="p-font text-white text-font">${element.text}</p>
                    </span>
                </div>
            </div>
        </div>
        `
    })

    // Meeting and Event Center 
    completedata.eventCenter.map(element => {
        document.getElementById("event").innerHTML += `
        <div class="img-content col-md-4 d-flex justify-content-center position-relative">
            <div class="img-hover position-relative">
                <img class="img-fluid" src="${element.img}">

                <div class="lay position-absolute p-5 col-md-4">
                    <span class="transition position-relative">
                        <p class="h4 goldenColor text-font">${element.eventTitle}</p>
                        <hr class="bg-black1 py-1">

                        <button class="btn-bg p-2 text-white" onclick="displayDinningCenter()"><a href="#dinning-full-view">Read More &nbsp; <i class="fa fa-arrow-right"></i></a></button>
                    </span>
                </div>
            </div>
        </div>
        `
    })

    // Testimonial
    completedata.testimonial.map(element => {
        document.getElementById("testify").innerHTML += `
        <div class="col-md">
            <div class="card bg-white py-5 shadow-md">
                <div class="card-body p-lg-5">
                    <div class="card-title">
                        <i class="fa fa-quote-left pColor fa-3x mb-4"></i>
                    </div>
                    <div class="card-text">
                        <p class="p-font pColor">"${element.text}"</p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end align-items-center mt-5">
                <span>
                    <h4 class="text-font goldenColor">${element.name}</h4>
                    <p class="p-font blueColor">${element.occupation}</p>
                </span>
                <div class="img-circle mx-5">
                    <img class="img-fluid w-50" src="${element.img}" alt="loading">
                </div>
            </div>
        </div>
        `
    })
    
    // About FullView 
    completedata.aboutComponent.map(element => {
        document.getElementById("whoWeAre").innerHTML += `
        <div class="about-content shadow-lg p-lg-5 p-2 my-3 transition">
        <img class="img-fluid mt-3 mb-5" src="./images/meeting-room.jpg" alt="">
        <div class="p-lg-3 px-3 py-5">
            <div>
                <p class="p-font pColor">${element.text}</p>

                <p class="p-font pColor">${element.text2}</p>
                <p class="p-font pColor">${element.text3}</p>
            </div>
            <div class="mt-5 pt-5">
                <div class="h3 goldenColor">Our <span class="blueColor">Vission & Mission</span></div>
                <div>
                    <p class="p-font pColor mt-3">${element.mission1}</p>
                    <p class="p-font pColor mt-3">${element.mission2}</p>
                    <p class="p-font pColor mt-3">${element.mission3}</p>
                    <p class="p-font pColor mt-3">${element.mission4}</p>
                </divS>
            </div>

            <div class="mt-5">
                <div class="h3 goldenColor">Our <span class="blueColor">Values</span></div>
                <div>
                    <p class="p-font pColor mt-3">Commitment to excellence</p>
                    <p class="p-font pColor mt-3">Pursuit og Growth</p>
                    <p class="p-font pColor mt-3">Genuine Care</p>
                    <p class="p-font pColor mt-3">Dedication</p>
                    <p class="p-font pColor mt-3">Creativity</p>
                    <p class="p-font pColor mt-3">Socially and environmentally Responsible</p>
                </divS>
            </div>
        </div>
    </div>
        `
    })

    // Dektol Dinning 
    completedata.dinningComponent.map(element => {
        document.getElementById("dinning").innerHTML += `
        <div class="Calabash shadow-lg p-lg-5 p-2 my-3 transition">
        <img class="width" src="${element.img}" alt="loading">
        <div class="bg-dark1 p-lg-5 px-3 py-5">
            <h3 class="text-font goldenColor text">${element.title}</h3>
            <p class="p-font">${element.text}</p>
        </div>
    </div>
        `
    })

    // Event Compontent 
    completedata.eventComponent.map(element => {
        document.getElementById("event-component").innerHTML += `
        <div class="Calabash shadow-lg p-lg-5 p-3 my-3 transition">
            <img class="width" src="${element.img}" alt="loading">
            <div class="bg-dark1 p-lg-5 px-1 py-5">
                <h3 class="text-font goldenColor text">${element.title}</h3>
                <p class="p-font">${element.text}</p>
            </div>
        </div>
        `
    })
    
    // Booking Component Avaliable Rooms 
    completedata.avaliableRooms.map(element => {
        document.getElementById("avaliable-rooms").innerHTML += `
        <span class="col-md-4 px-5" >
            <img class="img-fluid" src="${element.img}" alt="">
            <!-- Room Datails -->
            <div class="room-details my-5">
                <!-- Pricing  -->
                <div class="detail d-flex align-items-center justify-content-between">
                    <h3 class="goldenColor">${element.price}</h3>
                    <p class="plan p-font goldenColor p-lg-3 p-2">${element.plan}</p>
                </div>
                <!-- Lunch  -->
                <div class="detail d-flex align-items-center justify-content-between">
                    <p class="p-font goldenColor">${element.benefitOne}</p>
                    <i class="fa fa-check blueColor fa-2x"></i>
                </div>
                <!-- Pick-up  -->
                <div class="detail d-flex align-items-center justify-content-between">
                    <p class="p-font goldenColor">${element.benefitTwo}</p>
                    <i class="fa fa-check blueColor fa-2x"></i>
                </div>
                <!-- Sports  -->
                <div class="detail d-flex align-items-center justify-content-between">
                    <p class="p-font goldenColor">${element.benefitThree}</p>
                    <i class="fa fa-check blueColor fa-2x"></i>
                </div>
            </div>
        </span>
        `
    })
    
}).catch((err) => {
    console.log(err)
})
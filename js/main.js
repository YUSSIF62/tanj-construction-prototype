let sidebar = document.querySelector("#sidebar")
let mobile_trigger_btn = document.querySelector(".mobile-trigger-btn")
let sidebar_box = document.querySelector(".sidebar-content")
let close_btn = document.querySelector(".close-btn")

mobile_trigger_btn.addEventListener("click", ()=>{
     sidebar.style.display = "flex"
     sidebar_box.classList.add("show")
     console.log("clicking")
})

close_btn.addEventListener("click", ()=>{
    sidebar.style.display = "none"
})

document.addEventListener("mouseup", (e)=>{
    if(!sidebar_box.contains(e.target)){
           sidebar.style.display = "none";
    }
});

/* Small Slider in about us page */
$(function(){
     $(".description-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"</button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"</button>'
     })
     
     $(".partners-content").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                     slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    })

})
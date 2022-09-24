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
/* Hero section functionalities and slider implementation */
let topline = document.querySelectorAll(".landing-topline")
let landing_box = document.querySelectorAll(".landing-slide-box")

for(let i = 0; i < topline.length; i++){
    topline[i].addEventListener("animationend", ()=>{
        landing_box[i].style.maxHeight = "100%"
    })
}

var sliders = document.querySelectorAll(".landing-slide-moja"),
   arrowLeft = document.querySelector("#arrow-left"),
   arrowRight = document.querySelector("#arrow-right"),
   current = 0,
   curr = 0;

function reset(){
    for(var i = 0; i < sliders.length; i++){
        landing_box[i].style.maxHeight = "4px"
        sliders[i].style.display = "none";
    }
}
function startSlide(){
    reset();
    sliders[0].style.display = "block";
}

//show previous
function slideLeft(){
    reset();
    sliders[current-1].style.display = "block";
    current--;
}

//show next
function slideRight(){
    reset();
    sliders[current+1].style.display = "block";
    current++;
}
arrowLeft.addEventListener("click",function(){
    if(current === 0){
        current = sliders.length;
    }
    slideLeft();
});
arrowRight.addEventListener("click",function(){
    if(current === sliders.length - 1){
        current = -1;
    }
    slideRight();
});
function changeSlide(){
    reset();
    curr++;

    if(curr > sliders.length){
        curr = 1;
    }
    sliders[curr-1].style.display = "block";

    setTimeout(changeSlide,9000);
}
changeSlide();


/*Counter Section Implementation */
const counters = document.querySelectorAll(".count")
let count = 0


//start counter on scroll
const observer = new IntersectionObserver(()=>{
    counters.forEach(counter => {
        counter.innerText = '0'
        var updateCount = () =>{
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
    
            const increment = target / 200
    
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCount, 1)
            }
        }
        updateCount()
    })

    const entry = entries[0]
    if(entry.isIntersecting){
         observer.disconnect()
    }
})
let achievements = document.querySelector(".achievements-content-row")
observer.observe(achievements)


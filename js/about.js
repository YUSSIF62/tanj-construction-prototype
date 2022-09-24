let shift_btns = document.querySelectorAll(".heritage-left-shifts ul li")
let shift_containers = document.querySelectorAll(".shift-container-moja")

const showActive = (index)=>{
    shift_btns.forEach((btn)=>{
        btn.classList.remove("active")
    })
    shift_btns[index].classList.add('active')

    shift_containers.forEach((container)=>{
        container.style.display = "none"
    })
    shift_containers[index].style.display = 'flex'
}

showActive(0)

for(let i = 0; i < shift_btns.length; i++){
    shift_btns[i].addEventListener("click", ()=>{
        showActive(i)
    })
}

/*Counter Section Implementation */
const counters = document.querySelectorAll(".count")
let count = 0

//start counter on scroll
const observer = new IntersectionObserver((entries)=>{
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
let achievements = document.querySelector(".status-content-row")
observer.observe(achievements)
if(achievements.isIntersecting){
     observer.unobserve(achievements)
}
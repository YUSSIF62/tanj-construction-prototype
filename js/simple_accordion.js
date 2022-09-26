let accordion_triggers = document.querySelectorAll(".accordion-feature")

accordion_triggers.forEach(item => {
        const accordion_body = item.nextElementSibling
        if(item.classList.contains("active")){
            accordion_body.style.maxHeight = accordion_body.scrollHeight + "px"
        }
        item.addEventListener("click", ()=>{
            const currently_active = document.querySelector(".accordion-feature.active")

            if(currently_active && currently_active !== item){
                 currently_active.classList.toggle("active")
                 currently_active.nextElementSibling.style.maxHeight = 0
            }
            item.classList.toggle("active")

            if(item.classList.contains("active")){
                  accordion_body.style.maxHeight = accordion_body.scrollHeight + "px"
            }else{
                 accordion_body.style.maxHeight = 0
            }
        })
    }
)
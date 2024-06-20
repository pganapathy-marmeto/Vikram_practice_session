const button = document.querySelectorAll(".content-with-image__hotspot-container")
const splider = document.querySelector(".splide")
console.log(button)
button.forEach((node,index)=>{
    node.addEventListener("click",(event)=>{
        splider.splide.go(index)
    })
})
const quickLook = document.querySelectorAll(".card-with-info__quick-look")
const modal = document.querySelector(".modal")
const section = document.querySelector(".section")


quickLook.forEach(node=>{
    node.addEventListener("click", async function(e) {
        e.stopPropagation()
        console.log("working")
        modal.innerHTML=""
        const data = await fetch(e.target.dataset.url)
        const result = await data.text()
        console.log(result)
        const parser = new DOMParser();
        console.log(e.target.dataset.url)
        let newData = parser.parseFromString(result,"text/html").querySelector(`[data-url='${e.target.dataset.url}']`)
        console.log(newData)
        modal.innerHTML = newData.innerHTML
        modal.showModal()
    })
})



modal.addEventListener("click",(event)=>{
    modal.close()
})


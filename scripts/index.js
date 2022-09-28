let rpData = [
    {
        title: "woods",
        text: "Photography"
    },
    {
        title: "path",
        text: "Website • Photography"
    },
    {
        title: "darkness",
        text: "Website"
    },
    {
        title: "waves",
        text: "Photography"
    },
    {
        title: "drops",
        text: "Website"
    },
    {
        title: "ocean",
        text: "Website"
    },
    {
        title: "town",
        text: "Website"
    },
    {
        title: "mountain",
        text: "Website"
    },
    {
        title: "camera",
        text: "Website"
    }
]

let rpEl = document.querySelector("#projects")
    
function rpCards(){
    console.log(1)
    rpData.forEach( (el, i) => {
        let tempCard = document.createElement('div')
        tempCard.className = "card"
        tempCard.innerHTML = `
        <div class="card">
            <div class="card__img">
                <img src="img/rp-${i}.png">
            </div>
            <span class="card__title">${el.title}</span>
            <span class="card__text">${el.text}</span>
        </div>`
        rpEl.appendChild(tempCard)
    })
}

document.addEventListener("onload",rpCards)
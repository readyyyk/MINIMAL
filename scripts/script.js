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
let teamData = [
    {
        title: "Ron Swanson",
        text: "Founder",
        social: {
            ig: false,
            facebook: false,
            tweeter: true,
            linkedin: true,
            be: false,
            basketball: false,
            mail: true
        }
    },
    {
        title: "Julia Depish",
        text: "Marketing",
        social: {
            ig: false,
            facebook: false,
            tweeter: true,
            linkedin: true,
            be: false,
            basketball: false,
            mail: true
        }
    },
    {
        title: "Danny Devry",
        text: "Designer",
        social: {
            ig: true,
            facebook: false,
            tweeter: true,
            linkedin: true,
            be: true,
            basketball: true,
            mail: true
        }
    },
    {
        title: "Lisa Smith",
        text: "Developer",
        social: {
            ig: false,
            facebook: true,
            tweeter: true,
            linkedin: false,
            be: false,
            basketball: false,
            mail: true
        }
    },
]

let rpEl = document.querySelector("#projects"),
    teamEl = document.querySelector("#team")
    
function rpCards(){
    rpData.forEach( (el, i) => {
        let tempCard = document.createElement('div')
        tempCard.className = "card"
        tempCard.innerHTML = `
            <div class="card__img">
                <img src="img/rp-${i+1}.png">
            </div>
            <span class="card__title">${el.title}</span>
            <span class="card__text">${el.text}</span>`
        rpEl.appendChild(tempCard)
    })
}
rpCards()

function teamCards(){
    teamData.forEach( (el, i) => {
        let tempCard = document.createElement('div')
        tempCard.className = "card"
        let tempStr = `
            <div class="card__img">
                <img src="img/team-${i+1}.png">
            </div>
            <span class="card__title">${el.title}</span>
            <span class="card__text">${el.text}</span>
            <span class="card__social">`

            let it=0
            for(let s in el.social){
                it++
                
                if(el.social[s]){
                    tempStr+=`<a href="#"><img src="img/social-${it}.svg"></a>`
                }
            }

            tempStr +=`</span>`
        tempCard.innerHTML = tempStr
        teamEl.appendChild(tempCard)
    })
}
teamCards()


function nav(){
    let el = document.querySelector('#collapse')
    if(el.getAttribute("data-closed")=="true"){
        el.style.display = 'flex'
        el.setAttribute("data-closed", false)
    }
    else{
        el.style.display = 'none'
        el.setAttribute("data-closed", true)
    }
        
}
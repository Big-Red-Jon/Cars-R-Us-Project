import { getInterior, setInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            
        }
    }
)

export const Interior = () => {
    let html = "<ul>"

    const listInt = interiors.map(interior=> {
        return `<li>
        <input type="radio" name="interior" value="${interior.id}"/>${interior.material}
        </li>`
    })

    html +=listInt.join("")
    html +="</ul>"

    return html
}
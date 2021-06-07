import { getTechnology, setTechnology } from "./database.js"

const techChoices = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "tech") {
            setTechnology(parseInt(event.target.value))
            
        }
    }
)

export const Tech = () => {
    let html="<ul>"

    const techItem = techChoices.map(techitem => {
        return `<li>
        <input type="radio" name="tech" value="${techitem.id}"/>${techitem.package}
        </li>`  
    })
    html +=techItem.join("")
    html += "</ul>"

    return html
}
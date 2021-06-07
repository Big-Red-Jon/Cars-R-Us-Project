import { getColor, setColor } from "./database.js";

const colors = getColor()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Color = () => {
    let html = "<ul>"

    const listColors = colors.map(color => {
        return `<li>
         <input type="radio" name="color" value="${color.id}"/> ${color.color}
       </li>`
    })

    html += listColors.join("")
    html += "<ul>"

    return html
}
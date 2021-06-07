import {Color} from "./Colors.js"
import {Tech} from "./Tech.js"
import {Interior} from "./Interior.js"
import {Wheels} from "./Wheels.js"
import {Orders} from "./Orders.js"
import { addCustomCarOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomCarOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1> Cars-R-Us </h1>
        
        <article class="choices"> 
        <section class="choices_colors options">
            <h2>Colors</h2>
            ${Color()}
        </section>
        <section class="choices_interiors options">
            <h2>Interiors</h2>
            ${Interior()}
        </section>
        <section class="choices_technology options">
            <h2>Technology</h2>
            ${Tech()}
        </section>
        <section class="choices_wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        </article>

        <article>
            <button id="orderButton"> Customize Your Car </button>
        </article>
        
        <article class="customCar">
            <h2>Customized Ride</h2>
            ${Orders()}
        </article>
    `

}
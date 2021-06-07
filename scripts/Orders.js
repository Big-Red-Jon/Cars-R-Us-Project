import {getOrders} from "./database.js"



const customOrderBuilder = (order) => {
    return `<li>
    Order #${order.id} was placed on ${order.timestamp} and cost ${order.price}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()
    return `
        <ul>
            ${orders.map(
                (order) => {
                    return customOrderBuilder(order)
                }
            ).join("")}
        </ul>
    `
}
const database = {
    colors: [
        {id: 1, color: "silver", price: 200.00},
        {id: 2, color: "midnight blue", price: 300.00},
        {id: 3, color: "firebrick red", price: 250.00},
        {id: 4, color: "spring green", price: 500.00}
    ],
    interiors: [
        {id: 1, material: "beige fabric", price: 400.00},
        {id: 2, material: "charcoal fabric", price: 300.00},
        {id: 3, material: "white leather", price: 200.00},
        {id: 4, material: "black leather", price: 500.00}
    ],
    technology: [
        {id: 1, package: "basic", price: 300.00},
        {id: 2, package: "navigation", price: 500.00},
        {id: 3, package: "visibility", price: 700.00},
        {id: 4, package: "ultra package", price: 1000.00}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 150.00},
        {id: 1, type: "17-inch Pair Radial Black", price: 250.00},
        {id: 1, type: "18-inch Pair Spoke Silver", price: 350.00},
        {id: 1, type: "18-inch Pair Spoke Black", price: 450.00}
    ],
    customOrders: [
        {
        id: 1,
        colorId: 3,
        interiorId: 2,
        techId: 3,
        wheelId: 1,
        timestamp: 16895837301,
        price: 1500
        }
    ],
    orderBuilder: {}
}

export const getColor = () => {
    return database.colors.map(color=> ({...color}))
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
// These export the arrays to the other files/pages

export const setColor = (id) => {
    return database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    return database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    return database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    return database.orderBuilder.wheelId = id
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
//  This gather up orders to be displayed

export const addCustomCarOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()

    const orderColor = database.colors.find(
        (color) => {
            return color.id === newOrder.colorId
        }
    )
    const orderInteriors = database.interiors.find(
        (interior) => {
            return interior.id === newOrder.interiorId
        }
    )
    const orderTech = database.technology.find(
        (tech) => {
            return tech.id === newOrder.technologyId
        }
    )
    const orderWheel = database.wheels.find(
        (wheel) => {
            return wheel.id === newOrder.wheelId
        }
    )

    const totalPrice = orderColor.price + orderInteriors.price + orderTech.price + orderWheel.price

    newOrder.price = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


  
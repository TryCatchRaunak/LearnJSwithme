const target = {
    message1: "Hello",
    message2: "Raunak"
}

const handler1 = {}

const proxy1 = new Proxy(target, handler1)


console.log(proxy1.message1)





const target2 = {
    message1: "This is Javascript",
    message2: "We are learning ES6 js"
}

const handler2 = {
    get(target2, prop, receiver) {
        console.log(`Getting ${prop}`)
        return "world"
    }
}

const proxy2 = new Proxy(target2, handler2)

console.log(proxy2.message2)






const target3 = {
    message1: "Hello",
    message2: "Everyone"
}

const handler3 = {
    get(target3, prop, receiver)
    {
        if(prop === 'message2')
        {
            return "World"
        }
        return Reflect.get(...arguments)
    }
}


const proxy3 = new Proxy(target3, handler3)

console.log(proxy3.message1)
console.log(proxy3.message2)
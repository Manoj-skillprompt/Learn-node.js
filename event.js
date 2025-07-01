
const EventEmitter= require('events')

const myEmitter= new EventEmitter()

//define an event listener
myEmitter.on('greet',()=>{
    console.log('hello world')
})

//trigger (emit) an event(greet)
myEmitter.emit('greet')

//task

const count={
    "login":0,
    "purchase":0
}

myEmitter.on('user-login',(user)=>{
    count["login"]++
    console.log(`user ${user} has logined`)
})

myEmitter.on('purchase',(user,purchase)=>{
    count["purchase"]++
console.log(`${user} has purchased a ${purchase}`)
})
myEmitter.on('summary',()=>{
    console.log(count)
})
myEmitter.emit('user-login','Manoj')
myEmitter.emit('purchase', 'Manoj', 'laptop')
myEmitter.emit('user-login','Manoj')
myEmitter.emit('purchase', 'Manoj', 'laptop')
myEmitter.emit('summary')
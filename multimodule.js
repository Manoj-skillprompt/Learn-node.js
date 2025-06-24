function fun1(name){
    console.log(`Hello ${name}`)
}

// module.exports= fun1

function fun2(name){
    console.log(`Hello ${name}`)
}
// module.exports= fun2

function fun3(name){
    console.log(`Hello ${name}`)
}
// module.exports= fun3

// this type of export overwrites other export so only fun3 is accessible to other modules.

// here is the correct way to export all functions
module.exports={
  fun1:fun1,
  fun2:fun2,
  fun3:fun3

}

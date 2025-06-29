import fs, { write } from 'fs'
// var data=''
// var readerStream= fs.createReadStream('input.txt')

// readerStream.setEncoding('utf-8')

// readerStream.on('data',(chunk)=>{
// data += chunk
// })

// readerStream.on('end',()=>{
//     console.log(data)
// })

// readerStream.on('error',(e)=>{
//     console.log(e.stack)
// })
// console.log('program ended')
const data='this is writable stream'
var writeStream= fs.createWriteStream('output.txt')
writeStream.write(data,'utf-8')
writeStream.end()
writeStream.on('finish',()=>{
    console.log('finished')
})
const http=require('http')
const server= http.createServer((req,res)=>{
    // res.end('hello, world')
    if(req.url==='/'){
        res.end('this is home page')
    }else if(req.url==='/contact'){
         res.end('this is contact page')
    }
    else if(req.url==='/service'){
         res.end('this is service page')
    }else{
        res.end('this is next page')
    }

})

server.listen(4000,()=>{
    console.log('listening at port 4000')
})
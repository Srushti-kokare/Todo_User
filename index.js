const express =require('express')
const bodyParser=require('body-parser')
const route=require('./Route/route')
const app=express()
const mongoose=require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/data', route)
mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true
}).then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.listen(process.env.PORT || 3000,function(){
    console.log('Express app running on port' + (process.env.PORT|| 3000))
});
// const mongoose=require('mongoose')
// mongoose.connect(process.env.baseUrl,{
//     //unexpected connection error can be solved using this 
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//     //then is used to get resolved output
// }).then(()=>{
//     console.log("_______________Mongodb Atlast connected____________");
// }).catch((err)=>{
//     console.log(`-------------Mongodb connection error---------------${err}`);
// })

const mongoose=require('mongoose')

mongoose.connect(process.env.baseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("________Mongodb Atlas Connected_________");
}).catch((err)=>{
    console.log(`........mogodb connection error.........${err}`);
})
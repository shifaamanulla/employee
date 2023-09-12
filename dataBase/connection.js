const mongoose=require('mongoose')
mongoose.connect(process.env.baseUrl,{
    //unexpected connection error can be solved using this 
    useNewUrlParser:true,
    useUnifiedTopology:true
    //then is used to get resolved output
}).then(()=>{
    console.log("_______________Mongodb Atlast connected____________");
}).catch((err)=>{
    console.log(`-------------Mongodb connection error---------------${err}`);
})


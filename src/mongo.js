const mongoose=require("mongoose")

const mongoConnect = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/LoginFormPractice")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log(e);
})
}

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=new mongoose.model('User',userSchema)

module.exports={
    mongoConnect ,
    User
}
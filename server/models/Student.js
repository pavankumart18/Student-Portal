const mongoose=require('mongoose')

const Studentdata=new mongoose.Schema({
    name:{type:String},
    rollno:{type:String},
    phoneno:{type:String},
    branch:{type:String},
    username:{type:String},
    password:{type:String}
},{
    collection: 'students-data'
})

const model=mongoose.model('Students-data',Studentdata)

module.exports=model
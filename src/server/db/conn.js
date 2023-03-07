const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

 const connectDB = mongoose.connect("mongodb+srv://admin-prince:Prince3252@cluster0.xkujutz.mongodb.net/car-rental",{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection sucessful`);
}).catch((e)=>{
    console.log(`no connection`);
})
module.exports = connectDB
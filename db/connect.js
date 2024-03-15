const mongoose=require('mongoose');

const connectDB=(url)=>{
    console.log('ConnectDb');
    return mongoose.connect(url);
};

module.exports=connectDB;
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://gitesh152:giteshkumar@cluster0.6x3cdw2.mongodb.net/issue_tracker_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting db'));
db.once('open',()=>console.log(`Connected to db ${db.name}`));
module.exports=db;

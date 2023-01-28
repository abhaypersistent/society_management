const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    activeDate : Date.now,
    status:String,
    userType:String,
});

module.exports = {
    user : mongoose.model("user", userSchema)
}
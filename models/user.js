const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { text } = require("body-parser");
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save',function(next){
    let user = this;
    console.log(user);
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)
            console.log(user);
            console.log(user.password);
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                if(err) return next(err)
                user.password = hash;
                console.log(user.password);
                next()
            });
        });
    } else {
        next()
    }
})
const User = mongoose.model('User',userSchema);

module.exports = {User};
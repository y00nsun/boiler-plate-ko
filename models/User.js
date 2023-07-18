const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     // 공백 제거
        unique: 1       // 중복 없음  
    },
    password: {
        trype: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlenght: 50
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
})

const User = mongoose.model('User', userSchema) // 스키마를 감싸는 모델

module.exports = { User }  // 다른 파일에서 사용 가능

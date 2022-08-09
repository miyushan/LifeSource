const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        NIC: {
            type: String,
        },
        userName: {
            type: String,
            // required: [true, 'Please add your name'],
        },
        fullName: {
            type: String,
            // required: [true, 'Please add your name'],
        },
        dateOfBirth: {
            type: String,
            // required: [true, 'Please add your date Of birth'],
        },
        bloodGroup: {
            type: String,
            // required: [true, 'Please add your blood group'],
        },
        weight: {
            type: String,
            // required: [true, 'Please add your weight'],
        },
        address: {
            type: String,
            // required: [true, 'Please add your weight'],
        },
        mobileNumber: {
            type: String,
            // required: [true, 'Please add your weight'],
        },
        healthCondition: {
            type: String,
            // required: [true, 'Please add your health condition'],
        },
        city: {
            type: String,
            // required: [true, 'Please add your town'],
        },
        district: {
            type: String,
            // required: [true, 'Please add your district'],
        },
        email: {
            type: String,
            // required: [true, 'Please add your password'],
        },
        password: {
            type: String,
            // required: [true, 'Please add your password'],
        },
        userRole: {
            type: String,
            // required: [true, 'Please add your password'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)
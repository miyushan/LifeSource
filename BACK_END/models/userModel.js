const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
{
    name: {
        type: String,
        // required: [true, 'Please add your name'],
    },
    dateOfBirth: {
        type: String,
        // required: [true, 'Please add your date Of birth'],
    },
    weight: {
        type: String,
        // required: [true, 'Please add your weight'],
    },
    healthCondition: {
        type: String,
        // required: [true, 'Please add your health condition'],
    },
    bloodGroup: {
        type: String,
        // required: [true, 'Please add your blood group'],
    },
    town: {
        type: String,
        // required: [true, 'Please add your town'],
    },
    district: {
        type: String,
        // required: [true, 'Please add your district'],
    },
    password: {
        type: String,
        // required: [true, 'Please add your password'],
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema)
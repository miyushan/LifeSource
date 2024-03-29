const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc        Get users
// @route       GET /api/users
// @access      Private
const getUsers = asyncHandler(async (req, res) => {
    console.log('hello')
    const users = await User.find()

    res.status(200).json({ users })
})





// @desc        Register users
// @route       POST /api/users
// @access      Private
const registerUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add your data')
    }

    const user = await User.create({
        NIC: req.body.NIC,
        userName: req.body.userName,
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        bloodGroup: req.body.bloodGroup,
        weight: req.body.weight,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        healthCondition: req.body.healthCondition,
        city: req.body.city,
        district: req.body.district,
        email: req.body.email,
        password: req.body.password,
        userRole: req.body.userRole,
    })
    res.status(200).json({ user })
})





// @desc        Update users
// @route       PUT /api/users/:id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id)

    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({ updatedUser })
})





// @desc        Delete users
// @route       DELETE /api/users/:id
// @access      Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id)

    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }

    await user.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}
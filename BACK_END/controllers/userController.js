const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc        Get users
// @route       GET /api/users
// @access      Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.status(200).json({ users })
})





// @desc        Register users
// @route       POST /api/users
// @access      Private
const registerUser = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400)
        throw new Error('Please add your data')
    }

    const user = await User.create({
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        weight: req.body.weight,
        healthCondition: req.body.healthCondition,
        bloodGroup: req.body.bloodGroup,
        town: req.body.town,
        district: req.body.district,
        password: req.body.password
    })
    res.status(200).json({ user })
})





// @desc        Update users
// @route       PUT /api/users/:id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id)

    if(!user) {
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

    if(!user) {
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
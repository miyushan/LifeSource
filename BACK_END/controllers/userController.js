const asyncHandler = require('express-async-handler')

// @desc        Get users
// @route       GET /api/users
// @access      Private
const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get users` })
})

// @desc        Register users
// @route       POST /api/users
// @access      Private
const registerUser = asyncHandler(async (req, res) => {
    if(!req.body.x) {
        res.status(400)
        throw new Error('Please add your data')
    }else{
        res.status(200).json({ message: `Get users` })
    }
})

// @desc        Update users
// @route       PUT /api/users/:id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update user ${req.params.id}` })
})

// @desc        Delete users
// @route       DELETE /api/users/:id
// @access      Private
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
})

module.exports = {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
}
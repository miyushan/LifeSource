const express = require('express')

const router = express.Router()
const { getUsers, registerUser, updateUser, deleteUser } = require('../controllers/userController')

// const {
//   registerUser,
//   loginUser,
//   getMe,
// } = require('../controllers/userController')
// const { protect } = require('../middleware/authMiddleware')

// router.post('/', registerUser)
// router.post('/login', loginUser)
// router.get('/me', protect, getMe)


router.get('/', getUsers);
router.post('/', registerUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);



module.exports = router
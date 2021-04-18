const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  removeFriend
} = require('../../controllers/User-controller');

// /api/Users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/User/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

module.exports = router;
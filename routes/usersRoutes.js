const { Router } = require('express'); 
const userController = require('../controllers/usersController'); 
  
// Initialization 
const router = Router(); 
  
// Requests  
router.post('/', userController.createUser); 
router.put('/', userController.updateUser); 
router.get('/', userController.getUsers); 
// TODO get user data by ID
router.delete('/', userController.deleteUser); 
  
module.exports = router;
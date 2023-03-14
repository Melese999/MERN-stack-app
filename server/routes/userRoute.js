module.exports=app=>{
const users = require('../controllers/userController')  
const router = require("express").Router();
 
router.get('/',users.getAllusers);
router.post('/',users.registerUsers);
router.delete('/:name',users.delete);
router.put('/:name',users.updateUsers);
app.use('/api/users',router)
}
const usersServices = require('../services/usersServices');

const createUser = (req, res)=>{ 
    res.type('text/plain')
        .status(404)
        .send('Still not implemented');
} 
  
const updateUser = (req, res)=>{ 
    res.type('text/plain')
        .status(404)
        .send('Still not implemented');
} 
const getUser = (req, res)=>{ 
    res.type('text/plain')
        .status(404)
        .send('Still not implemented');
} 
const getUsers = async (req, res)=>{ 
    try {
        res
            .status(200)
            .json(await usersServices.getUsers());
    } catch (err) {
        console.error(`Error while getting users `, err.message);

        res.type('text/plain')
        .status(500)
        .send('Error while getting users');
    }
} 
  
const deleteUser = (req, res)=>{ 
    res.type('text/plain')
        .status(404)
        .send('Still not implemented');

} 
  
// Export of all methods as object 
module.exports = { 
    createUser, 
    updateUser, 
    getUser, 
    getUsers, 
    deleteUser 
}
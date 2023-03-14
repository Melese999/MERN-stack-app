const Users = require('../models/users');
const bcrypt = require('bcrypt');

exports.registerUsers = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        isactive: req.body.isactive,
    });
    await users.save().then((result) => {
        res.status(201).send(result);
    }).catch((err) => {
        res.status(500).send('unexpected error occured from the server ' + err);
    });
}
exports.updateUsers = async(req,res,next)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const users = {
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        isactive: req.body.isactive,
    }
    const search = {name:req.params.name};
    await Users.findOneAndUpdate(
    search,users,{
        returnOriginal: false
     }
    ).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(202).send('user not found ')
    })
}
exports.delete = async(req,res,next)=>{
   await Users.findOneAndDelete({
        name:req.params.name
    }).then((result)=>{
        res.status(200).send('users deleted successfully')
    }).catch((err)=>{
        res.status(202).send(err +' no user found by name '+req.params.name)

    })
}

exports.getAllusers = async (req, res, next) => {
   await Users.find({
         
    }).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(401).send();

    })
}


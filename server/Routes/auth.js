const { request } = require('express');
var User = require('../Modals/User')
module.exports = (app) => {
    app.get('/sign-up', async (req,res,next) =>{ 
        try{
            var users = await User.find()
        }catch(err){
            res,send(err);
        }
        res.send(users);
    });
    app.get('/:id' , async (req,res,next)=>{

    })
    app.post('/sign-in', async (req, res, next) => {
        const user = new User({
            name : req.body.name,
            email : req.body.email,
            phone :req.body.phone 
        });
        try{
            const userSave = await user.save();
        }catch(err){
            res.send(['Some Error Occured'])
        }
        res.send(userSave); 
    });

    app.put('/')
}

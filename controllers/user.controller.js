const User = require('../modles/user.model');

async function handleSignup (req, res) {
    console.log(req.body);
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.staus(400).json({'msg':"all fields are required"});
    }
    if(password.length < 6){
        return res.status(400).json({'msg':"password must be of atleast 6 length"});
    }
    const user = await User.create({
        name,
        email,
        password,
    })
    if(!user){
        console.log("error in creating user");
        return res.json({"message": "user is not created"});
    }
    res.status(201).json(user);
}

async function handleLogin (req, res) {
   
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({'msg':"all fields are required"});
    }
    
    const user = await User.findOne({
        email,
    })
    
    console.log(user.password);
    if(!user ){
        return res.staus(400).json({'msg':"invalid credentials"});
    }
    if(password !== user.password){
        return res.status(400).json({'msg':"invalid credentials"});
    }
    return res.redirect('/');
}

module.exports = {
    handleSignup,
    handleLogin,
}
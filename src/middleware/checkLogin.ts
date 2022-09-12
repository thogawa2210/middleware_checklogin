let user = {username: 'thogawa', password: '123456'};
import bodyParser from "body-parser";

export const checkLogin = (req, res, next) => {
    if(req.body.username === user.username && req.body.password === user.password){
        next();
    }else{
        res.status(403).json({message: 'Unauthorize'});
    }
};
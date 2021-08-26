import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

async function signIn(req, res) {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles");
    if (!userFound) return res.json({ message: 'User no found' });
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    
    if (!matchPassword) return res.json({ userFound: '', token: null, message: 'Invalid password' });
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 60 * 60 * 24
    });
    res.json({ userFound, token })
}
export default {
    signIn
}
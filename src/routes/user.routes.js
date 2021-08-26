import Router from 'express';
import userController from '../controllers/user.controller'
import { authJWT, verifySignUp } from '../middlewares';

const router = Router();

router.post('/signUp', [
        authJWT.verifyToken,
        verifySignUp.checkDuplicateUsernameOrEmail,
        authJWT.isSuperAdmin,
        verifySignUp.checkRolesExisted        
    ], userController.signUp);

export default router;
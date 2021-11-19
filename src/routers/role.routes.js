import { Router } from 'express'
const router=Router();
import * as roleCtr from '../controllers/role.controller';
const {checkToken}=require('../auth/token_validation');
router.get('/',checkToken,roleCtr.readAllRoles);
export default router;
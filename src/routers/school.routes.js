import { Router } from 'express'
const router=Router();
import * as schoolCtr from '../controllers/school.controller';
const {checkToken}=require('../auth/token_validation');
router.get('/',checkToken,schoolCtr.readAllSchools);
router.get('/:id',checkToken,schoolCtr.readSchool);
router.post('/',checkToken,schoolCtr.createSchool);
router.delete('/:id',checkToken,schoolCtr.dellSchool);
export default router;
import { Router } from 'express'
const router=Router();
import * as schoolCtr from '../controllers/school.controller'
const {checkToken}=require('../auth/token_validation')
router.get('/',schoolCtr.readAllSchools);
router.get('/:id',schoolCtr.readSchool);
router.post('/',schoolCtr.createSchool);
router.delete('/:id',schoolCtr.dellSchool);
export default router;
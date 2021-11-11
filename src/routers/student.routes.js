import { Router } from 'express'
const router=Router();
import * as studentCrt from '../controllers/student.controller';
const {checkToken}=require('../auth/token_validation');
router.get('/',studentCrt.readAllStudents);
router.get('/:id',studentCrt.readStudent);
router.post('/',studentCrt.createStudent);
router.delete('/:id',studentCrt.dellStudent);
export default router;
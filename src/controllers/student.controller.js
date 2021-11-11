import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllStudents=async(req,res)=>{
    try {
        const response=await pool.query('select * from alumno');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readStudent=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from alumno where idalumno=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellStudent=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from alumno where idalumno=$1',[id]);
        return res.status(200).json(`Alumno ${id} eliminado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createStudent=async(req,res)=>{
    try {
        const{nombres,apellidos,direccion,telefono,idescuela}=req.body;
        await pool.query('insert into alumno (nombres,apellidos,direccion,telefono,idescuela) values ($1,$2,$3,$4,$5)',[nombres,apellidos,direccion,telefono,idescuela]);
        return res.status(200).json(`Alumno ${apellidos} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
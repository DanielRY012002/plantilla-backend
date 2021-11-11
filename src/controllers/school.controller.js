import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllSchools=async(req,res)=>{
    try {
        const response=await pool.query('select * from escuela');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readSchool=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from escuela where idescuela=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellSchool=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from escuela where idescuela=$1',[id]);
        return res.status(200).json(`Escuela ${id} eliminada correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createSchool=async(req,res)=>{
    try {
        const{escuela}=req.body;
        console.log(escuela);
        await pool.query('insert into escuela (escuela) values ($1)',[escuela]);
        return res.status(200).json(`Escuela ${escuela} creada correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
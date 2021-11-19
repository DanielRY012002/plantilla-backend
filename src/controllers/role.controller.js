import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllRoles = async (req, res) => {
    try {
        const response=await pool.query(`select * from rol where estado='1'`);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readRole = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query(`select * from rol where idrol=$1 and estado='1'`, [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
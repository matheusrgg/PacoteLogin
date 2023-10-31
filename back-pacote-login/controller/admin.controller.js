
const Admin = require('../model/Admin')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class AdminController {

    static listAdmin() {
        const anuncio = anuncio.findAll()
        return res.status(201).send(vai);
    }


    static async createAdmin(req, res) {
        try {
            const { username, password } = req.body;
            const data = {
                username,
                password,
            };
            //saving the user
            const admin = await Admin.create(data);
            return res.status(201).send(admin);
        } catch (error) {
            console.log(error);
        }
    }


    static async loginAdmin(req, res) {
        console.log("request vindo body", req.body)
        const { username, password } = req.body
        console.log("passwordaaaaaaaa", password);
        const adminLogin = await Admin.findOne({
            where: {
                username: username
                // email: email
            }
        });
        console.log("admins entendendo", adminLogin)
        if (adminLogin) {
            console.log("estou entrando")
            if (bcrypt.compare(password, adminLogin.password)) {
                console.log("ENTREIII NO IF")
                const token = jwt.sign({
                    username: adminLogin.username,
                    id: adminLogin.id,

                }, 'mysecretkey');
                return res.status(201).json(token)
            } else {
                res.status(401).send("passworda errada")
            }
        } else {
            return res.status(401).send("Authentication Failed")
        }
    }
}






module.exports = AdminController
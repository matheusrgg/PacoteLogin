const Anuncio = require('../model/Anuncio')


class AnuncioController {
    constructor() { }

    static async listAnuncio(req, res) {
        const anuncio = await Anuncio.findAll()
        return res.status(201).send(anuncio);
    }

    static async createAnuncio(req, res) {
        try {
            const { nome, idFornecedor, regiao, desconto, distribuidora, multaCancelamento, fidelidadeMinima } = req.body;
            const data = {
                nome, idFornecedor, regiao, desconto, distribuidora, multaCancelamento, fidelidadeMinima
            };
            //saving the user
            const userName = await Anuncio.create(data);
            return res.status(201).send(userName);
        } catch (error) {
            console.log(error);
        }
    }

    static async idAnuncio(req, res) {
        const anuncio = await Anuncio.findByPk(req.params.id)
        return res.status(201).send(anuncio);
    }

    static async welcome(req, res) {
        res.status(200).send("teste");



    }



}

module.exports = AnuncioController
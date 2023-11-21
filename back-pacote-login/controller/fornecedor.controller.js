const Anuncio = require('../model/Anuncio');
const Fornecedor = require('../model/Fornecedor')


class FornecedorController {
  constructor() { }

  static async listFornecedor(req, res) {
    const fornecedor = await Fornecedor.findAll()
    return res.status(201).send(fornecedor);
  }

  static async createFornecedor(req, res) {
    try {
      const {
        email,
        nomeComercial,
        cnpj,
        razaoSocial,
        endereco,
        logotipo
      } = req.body;
      const data = {
        email,
        nomeComercial,
        cnpj,
        razaoSocial,
        endereco,
        logotipo
      };
      //saving the user
      const userName = await Fornecedor.create(data);
      return res.status(201).send(userName);
    } catch (error) {
      console.log(error);
    }
  }

  static async idFornecedor(req, res) {
    const fornecedor = await Fornecedor.findByPk(req.params.id)
    return res.status(201).send(fornecedor);
  }

  static async deleteFornecedor(req, res) {
    try {
      const id = req.params.id;
      var fornecedor = await Fornecedor.destroy({ where: { id } })
      var retornoDelete

      if (fornecedor === 1) {
        retornoDelete = { success: true, message: `A Fornecedor com id: ${id} foi deletada.` };
        return res.status(200).send(retornoDelete);
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async editFornecedor(req, res) {
    try {
      var fornecedor = await Fornecedor.findByPk(req.params.id)
      const {
        email,
        nomeComercial,
        cnpj,
        razaoSocial,
        endereco,
        logotipo
      } = req.body;
      const data = {
        email: email,
        nomeComercial: nomeComercial,
        cnpj: cnpj,
        razaoSocial: razaoSocial,
        endereco: endereco,
        logotipo: logotipo
      };
      const where = {
        where: {
          id: req.params.id
        }
      }

      fornecedor = await Fornecedor.update(data, where);
      return res.status(201).send(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  static async listAnunciosFornecedor(req, res) {
    const idFornecedor = req.params.id
    const propostas = await Anuncio.findAll({
      where: {
        idFornecedor: idFornecedor,

      },
      include: {
        model: Fornecedor,
        required: true
      },


    })
    const propstaComNome = propostas.map(data => {
      return {
        id: data.id,


      }
    })
    return res.status(201).send(propstaComNome);
  }




}

module.exports = FornecedorController
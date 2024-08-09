const DonorRepository = require("../repositories/DonorRepository");

class DonorController {
  async index(_req, res) {
    try {
      const donors = await DonorRepository.findAll();
      return res.json(donors);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao buscar doadores.' });
    }
  }

  async show (req, res) {
    const { id } = req.params

    try {
      const donor = await DonorRepository.findById(id)

      if (!donor)
        return res.status(400).json({ message: 'Doador não encontrado.' })

      return res
        .status(200)
        .json({ message: 'Doador encontrado com sucesso', donor })

    } catch (error) {
      console.error(error)
      return res.status(400).json({ message: 'Doador não encontrado.' })
    }
  }

  async create (req, res) {
    const { nome, email, nascimento, infoiapes } = req.body
    /*
      {
        "nome": "Filipe Bacof",
        "email": "filipebacof@gmail.com",
        "nascimento": "1998-01-05T00:00:00.000Z",
        "infoiapes": "s" || "infoiapes": "n"
      }
    */

    if (!nome || !email || !nascimento) {
      return res
        .status(422)
        .json({ message: 'Estão faltando campos obrigatórios para o cadastro' })
    }

    // Validar formatos de dados antes

    const donor = await DonorRepository.create({
      nome,
      email,
      nascimento,
      ...(infoiapes && { infoiapes: infoiapes === "s" ? true : false }),
    })

    return res
      .status(200)
      .json({ message: 'Doador criado com sucesso', donor })
  }

  async updateInfoiapes (req, res) {
    const { email } = req.body

    try {
    const donor = await DonorRepository.findByEmail(email)

    if (!donor)
      return res
        .status(422)
        .json({ message: 'Doador não encontrado.' })

    await DonorRepository.updateInfoiapes(donor.id)

    return res
    .status(200)
    .json({ message: 'Doador não receberá mais informações sobre a IAPES.' })

    } catch (error) {
      console.error(error)
      return res
        .status(404)
        .json({ message: 'Esse Doador não encontrado.' })
    }
  }
}

module.exports = new DonorController()
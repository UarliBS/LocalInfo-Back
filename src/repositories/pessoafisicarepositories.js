import PessoaFisica from "../models/PessoaFisica.js";

const findByEmailPessoaFisicaRepository = (email) =>
  PessoaFisica.findOne({ email: email }).select("+password");

const createServiceRepository = (body) => PessoaFisica.create(body);

const findAllServiceRepository = () => PessoaFisica.find();

const findByIdServiceRepository = (idPessoaFisica) =>
  PessoaFisica.findById(idPessoaFisica);

const updateServiceRepository = (id, { name, username, email, password, avatar }) =>
  PessoaFisica.findOneAndUpdate(
    { _id: id },
    {
      name,
      username,
      email,
      password,
      avatar,
    },
    {
      rawResult: true,
    }
  );

export default {
  createServiceRepository,
  findAllServiceRepository,
  findByIdServiceRepository,
  updateServiceRepository,
  findByEmailPessoaFisicaRepository,
};

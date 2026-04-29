import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import pessoajuridicarepositories from "../repositories/pessoajuridicarepositories.js";
import pessoafisicarepositories from "../repositories/pessoafisicarepositories.js";

dotenv.config();

function generateToken(id) {
  try {
    return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
  } catch (error) {
    throw new Error(`Error generating token: ${error.message}`);
  }
}

const loginServicePessoaJuridica = async ({ email, password }) => {
  const pessoajuridica =
    await pessoajuridicarepositories.findByEmailPessoaJuridicaRepository(email);

  if (!pessoajuridica || !pessoajuridica.password) {
    throw new Error("Falha ao fazer login. Email ou senha incorretos");
  }

  const isPasswordValid = await bcrypt.compare(password, pessoajuridica.password);

  if (!isPasswordValid) {
    throw new Error("Falha ao fazer login. Email ou senha incorretos");
  }

  return generateToken(pessoajuridica.id);
};

const loginServicePessoaFisica = async ({ email, password }) => {
  const pessoafisica =
    await pessoafisicarepositories.findByEmailPessoaFisicaRepository(email);

  if (!pessoafisica || !pessoafisica.password) {
    throw new Error("Falha ao fazer login. Email ou senha incorretos");
  }

  const isPasswordValid = await bcrypt.compare(password, pessoafisica.password);

  if (!isPasswordValid) {
    throw new Error("Falha ao fazer login. Email ou senha incorretos");
  }

  return generateToken(pessoafisica.id);
};

export default {
  loginServicePessoaJuridica,
  loginServicePessoaFisica,
  generateToken,
};

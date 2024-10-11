import { Request, Response } from 'express';
import { loginUsuario } from '../models/loginUsuario';

export default async function loginUsuarioController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  console.log('email:', email, 'senha:', senha);
  try {

    if (!email || !senha) {
      res.status(400).send({ data: { mensagem: 'Informações insuficientes!' } })
    }

    const verificaUsuario = await loginUsuario(email, senha);

    if (verificaUsuario?.status === 200) {
      return res.status(200).send({ data: { mensagem: verificaUsuario.mensagem } });
    } else {
      return res.status(verificaUsuario.status).send({ data: { mensagem: verificaUsuario?.mensagem } });
    }

  } catch (err) {
    console.log(err)
  }
};


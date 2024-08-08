import { Request, Response } from 'express';
import loginUsuario from '../models/loginUsuario'


export default async function loginUsuarioController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  try {

    if (!email || !senha) {
      res.status(400).send({ data: { mensagem: 'Informações insuficientes!' } })
    } else {

      const resultado = await loginUsuario(email, senha)

      return res.status(resultado.status).json({ mensagem: resultado.mensagem, dados: resultado.usuario });
    }

  } catch (err) {
    console.log(err)
  }
};


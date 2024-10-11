import { Request, Response } from 'express';
import cadastraUsuario from '../models/cadastraUsuario';


export default async function cadastrarUsuarioController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  try {

    if (!email || !senha) {
      res.status(400).send({ data: { mensagem: 'Informações insuficientes!' } })
    } else {

      const novoUsuario = await cadastraUsuario(email, senha);

      if (novoUsuario.status === 200) {
        return res.status(200).send({ data: { mensagem: novoUsuario.mensagem } })
      } else {
        return res.status(novoUsuario.status).send({ data: { mensagem: novoUsuario?.mensagem } });

      }

    }
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
  }
}

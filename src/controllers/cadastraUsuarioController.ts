import { Request, Response } from 'express';
import cadastraUsuario from '../models/cadastraUsuario';


export default async function cadastrarUsuarioController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  try {
    if (!email || !senha) {
      return res.status(400).send({ dados: { mensagem: 'Informações insuficientes!' } });
    } else {

      const novoUsuario = cadastraUsuario(email, senha);

      return res.status(200).send({ mensagem: 'Usuário cadastrado com sucesso!', dados: novoUsuario });
    }
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
  }
}

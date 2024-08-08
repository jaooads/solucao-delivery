import { Request, Response } from 'express';
import cadastraUsuario from '../models/cadastraUsuario';

export default async function cadastrarUsuarioController(req: Request, res: Response) {
  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  try {
    if (!email || !senha) {
      return res.status(400).send({ dados: { mensagem: 'Informações insuficientes!' } });
    } else {
      const resultado = await cadastraUsuario(email, senha);

      return res.status(resultado.status).json({ mensagem: resultado.mensagem, dados: resultado.usuario });
    }
  } catch (err) {
    return res.status(400).json({ mensagem: 'Erro ao cadastrar usuário.' });
  }
}

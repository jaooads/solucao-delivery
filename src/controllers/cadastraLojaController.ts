import { Request, Response } from 'express';
import cadastraLoja from '../models/cadastraLoja';

export default async function cadastrarLojaController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const nome: string | any = req.body.nome;
  const descricao: string | any = req.body.descricao;
  const categoria: string | any = req.body.categoria;
  const endereco: string | any = req.body.endereco;

  try {

    if (!email || !nome || !descricao || !categoria || !endereco) {
      res.status(400).send({ data: { mensagem: 'Informações insuficientes!' } })
    } else {

      const novaLoja = await cadastraLoja(email, nome, descricao, categoria, endereco);

      if (novaLoja?.status === 200) {
        return res.status(200).send({ data: { mensagem: novaLoja.mensagem } })
      } else {
        return res.status(400).send({ data: { mensagem: novaLoja?.mensagem } });

      }
    }
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
  }
}

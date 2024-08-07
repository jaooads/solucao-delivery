import { Request, Response } from 'express';

export default async function loginUsuarioController(req: Request, res: Response) {

  const email: string | any = req.body.email;
  const senha: string | any = req.body.senha;

  console.log('email:', email, 'senha:', senha);
  try {

    if (
      !email ||
      !senha
    ) {
      res.status(400).send({ data: { mensagem: 'Informações insuficientes!' } })
    } else {

      res.status(200).send({ data: { mensagem: 'Login com sucesso!' } })
    }


  } catch (err) {
    console.log(err)
  }
};


import Lojas from "../database/models/lojas";

export default async function cadastraLoja
  (email: string, nome: string, descricao: string, categoria: string, endereco: string) {
  try {

    const lojaExiste = await Lojas.findOne({ where: { nome } });

    if (lojaExiste !== null) {
      return { status: 400, mensagem: 'Loja já cadastrada!' };
    }

    const novaLoja = await Lojas.create({ email, nome, descricao, categoria, endereco });

    return { status: 200, mensagem: 'Loja cadastrada com sucesso!', loja: novaLoja };


  } catch (e) {
    console.log(e);
  }
}
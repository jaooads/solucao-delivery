import Usuario from '../database/models/usuarios';

export default async function cadastraUsuario(email: string, senha: string) {
  try {

    const usuarioExistente = await Usuario.findOne({ where: { email: email } });

    if (usuarioExistente !== null) {
      return { status: 400, mensagem: 'Usuário já cadastrado!' };
    }

    const novoUsuario = await Usuario.create({ email, senha });

    return { status: 200, mensagem: 'Usuário cadastrado com sucesso!', usuario: novoUsuario };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: 400, mensagem: `Erro ao cadastrar usuário: ${err.message}` };
    }
    return { status: 500, mensagem: 'Erro desconhecido ao cadastrar usuário.' };
  }
}
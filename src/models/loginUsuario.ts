import Usuario from '../database/models/usuarios';

export default async function loginUsuario(email: string, senha: string) {

  try {

    const usuario = await Usuario.findOne({ where: { email: email } })

    if (!usuario || usuario.senha !== senha) {
      return { status: 400, mensagem: 'E-mail ou senha incorretos!' };
    } else {

      return { status: 200, mensagem: 'Login com sucesso!', usuario: usuario };

    }
  } catch (err) {
    if (err instanceof Error) {
      return { status: 400, mensagem: `Erro ao realizar login: ${err.message}` };
    }
    return { status: 500, mensagem: 'Erro desconhecido ao realizar login.' };
  }
}
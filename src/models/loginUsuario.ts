import Usuario from '../database/models/usuarios';

export async function loginUsuario(email: string, senha: string) {

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario || usuario.senha !== senha) {
      return { status: 400, mensagem: "Email ou senha incorreto" };
    }

    return { status: 200, mensagem: "Login com sucesso!" };

  } catch (e) {
    console.log(e);
    return { status: 500, mensagem: "Erro no servidor" };
  }
}

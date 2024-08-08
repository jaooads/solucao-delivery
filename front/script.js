document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const signupModal = document.getElementById('signupModal');
  const closeModal = document.getElementById('closeModal');
  const openSignupModal = document.getElementById('openSignupModal');
  const message = document.getElementById('message');
  const signupMessage = document.getElementById('signupMessage');
  const successMessage = document.getElementById('successMessage');
  const signupSuccessMessage = document.getElementById('signupSuccessMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      email: formData.get('username'),
      senha: formData.get('password')
    };

    try {
      const response = await fetch('/loginUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        message.textContent = ''; // Clear any previous message
        successMessage.textContent = result.mensagem;
        successMessage.classList.add('show');
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 3000);
      } else {
        message.textContent = result.mensagem;
        message.style.color = 'red';
      }
    } catch (error) {
      console.error('Erro:', error);
      message.textContent = 'Erro ao tentar fazer login.';
      message.style.color = 'red';
    }
  });

  openSignupModal.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
  });

  document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const signupFormData = new FormData(e.target);
    const signupData = {
      email: signupFormData.get('email'),
      senha: signupFormData.get('senha')
    };

    try {
      const response = await fetch('/cadastraUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      });

      const result = await response.json();
      if (response.ok) {
        signupMessage.textContent = ''; // Clear any previous message
        signupSuccessMessage.textContent = result.mensagem;
        signupSuccessMessage.classList.add('show');
        setTimeout(() => {
          signupSuccessMessage.classList.remove('show');
          signupModal.style.display = 'none';
        }, 3000);
      } else {
        signupMessage.textContent = result.mensagem || 'Erro ao tentar cadastrar.';
        signupMessage.style.color = 'red';
      }
    } catch (error) {
      console.error('Erro:', error);
      signupMessage.textContent = 'Erro ao tentar cadastrar.';
      signupMessage.style.color = 'red';
    }
  });
});

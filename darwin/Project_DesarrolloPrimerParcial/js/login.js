
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Se aceptan cualquier usuario y contraseña

    // Función para mostrar el error y activar la animación
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        const container = document.querySelector('.login-container');
        container.classList.add('shake-error');
        
        setTimeout(() => {
            container.classList.remove('shake-error');
        }, 500); 
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username.trim() || !password.trim()) {
            displayError('Por favor ingresa usuario y contraseña.');
            return;
        }

        // Cualquiera puede iniciar sesión (para propósitos de demo) y se redirige.
        const successMessage = document.getElementById('error-message');
        successMessage.textContent = `✅ ¡Bienvenido ${username}! Redirigiendo...`;
        successMessage.classList.remove('error-message');
        successMessage.classList.add('success-message');
        successMessage.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    });
    
    
    const inputFields = [usernameInput, passwordInput];
    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            if (errorMessage.style.display !== 'none') {
                errorMessage.textContent = '';
                errorMessage.style.display = 'none';
                errorMessage.classList.remove('success-message');
                errorMessage.classList.add('error-message');
            }
        });
    });
});
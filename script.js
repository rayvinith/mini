document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = 'admin.html'; // Redirect to admin page
        } else {
            alert('Invalid login credentials');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

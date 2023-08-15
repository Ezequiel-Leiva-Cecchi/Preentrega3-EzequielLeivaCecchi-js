// inicio de session
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginStatus = document.getElementById("loginStatus");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("contraseña").value;
        const storedDataString = localStorage.getItem("dataOfTheForm");
        const storedData = JSON.parse(storedDataString);
        const storedEmail = storedData.email;
        const storedPassword = atob(storedData.password);
        console.log(storedData, storedEmail, storedPassword)
        if (storedEmail === email && storedPassword === password) {
            loginStatus.textContent = "Cuenta Iniciada.";
        } else {
            loginStatus.textContent = "Error:La cuenta ni está registrada.";
        }

    });
});






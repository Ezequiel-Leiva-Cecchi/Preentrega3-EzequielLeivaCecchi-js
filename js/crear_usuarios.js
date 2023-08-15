const formHtml = document.getElementById("formulario");

formHtml.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const email = formulario.elements["textEmail"].value
    const usuario = formulario.elements["textUsuario"].value
    const password = btoa(formulario.elements["textPassword"].value);
    const confirmPassword = btoa(formulario.elements["confirmPassword"].value);
    // atob() HACE EL DECODE DE btoa()

    console.log(password + confirmPassword)
    if (emailValidator(email) && validarUsuario(usuario) && checkPasswordSent(password, confirmPassword)) {
        const dataForm = { email, usuario, password };
        localStorage.setItem("dataOfTheForm", JSON.stringify(dataForm));
        alert("Ingreso un usuario exitosamente");
    } else {
        alert("Error,Uno de los campos no cumple con los requisitos.");
    }
});


function validarUsuario(usuario) {
    const patronUsuario = /^[a-zA-Z]{3,8}/;
    return patronUsuario.test(usuario);
}

const emailValidator = (email) => {
    const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patronEmail.test(email);
}

const checkPasswordSent = (password, confirmedPassword) => {
    if (password === confirmedPassword) { return true }
    else { return false }
}

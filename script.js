// Variables
let isChecked = false; // Checa o menú

// Menú
// Ocultar menú ao clicar nos links
let menu = document.querySelector(".menu");
function hiddenMenuBar() {

  if (isChecked && window.innerWidth <= 767) {
    menu.style.transform = "translateX(-100%)";
    isChecked = !isChecked;
  } else if (!isChecked) {
    menu.style.transform = "translateX(0%)";
    isChecked = !isChecked;
  }
  
}


// Formulario
// Validaçao do Nome
function validationName() {
  const message = document.getElementById("msg_name");

  const borderValidName = document.getElementById("name");
  const inputName = document.getElementById("name").value;
  const maxCaracterName = 50;
  const patternName = /^[A-Z ]+$/i;

  let validation = false;

  if (!inputName) {
    borderValidName.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputName.length > maxCaracterName) {
      borderValidName.style.borderColor = "red";
      message.innerHTML = "Apenas 50 caracteres são permitidos neste campo.";
      validation;
    } else {
      if (!patternName.test(inputName) && inputName) {
        borderValidName.style.borderColor = "red";
        message.innerHTML = "Somente letras.";
      } else {
        borderValidName.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
  }
  return validation;
}

// Validação do Email
function validationEmail() {
  const message = document.getElementById("msg_email");

  const borderValidEmail = document.getElementById("email");
  const inputEmail = document.getElementById("email").value;
  const patternEmail = /^\w+@(\w+\.)+\w{2,4}$/;
  const maxCaracterEmail = 65;

  let validation = false;

  if (!inputEmail) {
    borderValidEmail.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputEmail.length > maxCaracterEmail) {
      borderValidEmail.style.borderColor = "red";
      message.innerHTML = "Apenas 65 caracteres são permitidos neste campo.";
      validation;
    } else {
      if (!patternEmail.test(inputEmail)) {
        borderValidEmail.style.borderColor = "red";
        message.innerHTML = "Email invalida.";
      } else {
        borderValidEmail.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
  }
  return validation;
}

// Validaçao do Assunto
function validationSubject() {
  const message = document.getElementById("msg_subject");

  const borderValidSubject = document.getElementById("subject");
  const inputSubject = document.getElementById("subject").value;
  const patternSubject = /[A-Za-z0-9]+/g;
  const maxCaracterSubject = 50;

  let validation = false;

  if (!inputSubject) {
    borderValidSubject.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputSubject.length > maxCaracterSubject) {
      borderValidSubject.style.borderColor = "red";
      message.innerHTML = "Apenas 50 caracteres são permitidos neste campo.";
      validation;
    } else {
      if (!patternSubject.test(inputSubject)) {
        borderValidSubject.style.borderColor = "red";
        message.innerHTML =
          "Apenas numeros, letras maiúsculas e minúsculas são permitidas.";
      } else {
        borderValidSubject.style.borderColor = "green";
        message.innerHTML = "";
        validation = true;
      }
    }
  }

  return validation;
}

// Validaçao da Messagem
function validationTextarea() {
  const message = document.getElementById("msg_textarea");

  const borderValidTextarea = document.getElementById("textarea");
  const inputTextarea = document.getElementById("textarea").value;
  const minCaracterTextarea = 15;
  const maxCaracterTextarea = 300;

  let validation = false;

  if (!inputTextarea) {
    borderValidTextarea.style.borderColor = "red";
    message.innerHTML = "Este campo não pode estar vazio.";
    validation;
  } else {
    if (inputTextarea.length < minCaracterTextarea) {
      borderValidTextarea.style.borderColor = "red";
      message.innerHTML = "Minimo 15 caracteres neste campo.";
      validation;
    } else if (inputTextarea.length >= maxCaracterTextarea) {
      borderValidTextarea.style.borderColor = "red";
      message.innerHTML = "Limite de 300 caracteres neste campo.";
      validation;
    } else {
      borderValidTextarea.style.borderColor = "green";
      message.innerHTML = "";
      validation = true;
    }
  }
  return validation;
}

// Verificação do formulário
function verification() {
  const validName = validationName();
  const validEmail = validationEmail();
  const validSubject = validationSubject();
  const validTextarea = validationTextarea();

  if (!validName) {
    alert('O campo "nome" não é válido.');
  } else if (!validEmail) {
    alert('O campo "email" não é válido.');
  } else if (!validSubject) {
    alert('O campo "assunto" não é válido.');
  } else if (!validTextarea) {
    alert('O campo "messagem" não é válido.');
  } else {
    alert("Enviado com sucesso.");
  }
}

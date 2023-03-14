const storageService = storageService('usuarios')

storageService.save(1234)

let form = window.document.getElementById('form')
let nome =  window.document.getElementById('nome')
let email = window.document.getElementById('email')
let senha = window.document.getElementById('senha')
let c_senha = window.document.getElementById('c_senha')

const usuarios = []

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    if(senha.value === c_senha.value) {
        const usuario = {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
        }

        usuarios.push(usuario)
        console.log(usuarios)

        nome.value = ""
        email.value = ""
        senha.value = ""
        c_senha.value = ""
    
    }else {
        alert("As senhas estão diferentes!")
    }
    
})

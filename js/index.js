// let account = document.getElementById("login")

// account.addEventListener("click", function () {
//     
//     }
// })

// function confirmedUser() {
    
// }
let loginContent = document.getElementById("login")
let signInContent = document.getElementById("signIn")


function signIn() {
    loginContent.innerHTML = `<h6 id="signIn"><i class="bi bi-person"></i>Ingresar usuario</h6>`
    signInContent.addEventListener("click", function () {
        for(let i=3; i>=0; i--){
            let user = prompt('Ingrese usuario: (Usuario = Juan)')
            let pw = parseInt(prompt('Ingrese contraseña: (Contraseña = 12345)')) 
            if(user !== 'Juan' || pw !== 12345){
                alert('Usuario o contraseña incorrectos, intente denuevo \nIntentos: ' + i)
            }
            if(user == 'Juan' && pw == 12345) {
                signed(user)
                break
            }
        }
    })
}
function signed(user) {
    loginContent.innerHTML = ``
}

signIn()



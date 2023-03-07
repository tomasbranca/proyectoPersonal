
function login() {
    let user = localStorage.getItem('user')
    if (user) {
        alert('Bienvenido ' + user)
    } else {
        for(let i=3; i>=0; i--){
            user = prompt('Ingrese usuario: (Usuario = Juan)')
            let pw = parseInt(prompt('Ingrese contraseña: (Contraseña = 12345)')) 
            if(user !== 'Juan' || pw !== 12345){
                alert('Usuario o contraseña incorrectos, intente denuevo \nIntentos: ' + i)
            }
            if (user == 'Juan' && pw == 12345) {
                localStorage.setItem('user', user)
                alert('Bienvenido ' + user)
                break
            }
        }
    }
}

login()

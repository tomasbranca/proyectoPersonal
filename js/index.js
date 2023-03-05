function login(){
    for(let i=3; i>=0; i--){
        let user = prompt('Ingrese usuario: (Usuario = Juan)')
        let pw = parseInt(prompt('Ingrese contraseña: (Contraseña = 12345)')) 
        if(user !== 'Juan' && pw !== 12345){
            alert('Usuario o contraseña incorrectos, intente denuevo \nIntentos: ' + i)
        }
        else{
            alert('Bienvenido ' + user)
            break
        }
    }
}



//login()



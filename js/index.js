dataBase = JSON.parse(localStorage.getItem("loginSystem"));

//  Si no hay un usuario logueado, crea un "boton" para ingresarlo
//  Si ya hay un usuario logueado, ejecuta la funcion 'accountLoged'

window.addEventListener("load", function () {
  if (!user) {
    logDiv.innerHTML = `<div id="login"><h6><i class="bi bi-person-fill"></i> Ingresar usuario</h6></div>`
    let loginDiv = document.getElementById("login")
    loginDiv.addEventListener("click", loginAccount)
  }
  else if (user) {
    accountLoged()
  }
})

//  Aparece un menu donde se puede ingresar el nombre del usuario y la contraseña
//  Si el usuario no existe o la contraseña es incorrecta se informa el error
//  Habrá un boton para cancelar y otro para crear una cuenta, si se clickea el ultimo realiza la funcion 'createAccount'

async function loginAccount() {
  let { value: data } = await Swal.fire({
    title: "Inicio de sesión",
    html: `<input id="user" class="swal2-input" placeholder="Usuario">
          <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Ingresar",
    denyButtonText: `Crear usuario`,
    cancelButtonText: `Cancelar`,
    focusConfirm: false,
    preConfirm: () => {
      user = document.getElementById("user").value;
      let password = document.getElementById("password").value;
      if (!user) {
        Swal.showValidationMessage("Ingrese un usuario");
        return false;
      }
      if (!password) {
        Swal.showValidationMessage("Ingrese una contraseña");
        return false;
      }

      let data = dataBase[user];

      if (!data) {
        Swal.showValidationMessage("El usuario no existe");
        return false;
      }

      if (data.password != password) {
        Swal.showValidationMessage("La contraseña es incorrecta");
        return false;
      }

      return data;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      accountLoged()
    } else if (result.isDenied) {
      createAccount()
    }
  });
  return data;
}

//  Saldra un menu donde te permitira crear un nombre de usuario, una contraseña y un mail para la cuenta
//  Si no ingreso un nombre, un mail, una contraseña o las contraseñas no coinciden, se informará del error
//  Se guardará el usuario en la base de datos y se indicará que la operacion salió con exito

async function createAccount() {
  Swal.fire({
    title: "Crear nueva cuenta",
    html: `<input type="text" id="user" class="swal2-input" placeholder="Nombre de Usuario">
          <input type="email" id="email" class="swal2-input" placeholder="E-mail">
          <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
          <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirmar contraseña">`,
    showCancelButton: true,
    confirmButtonText: "Crear usuario",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
    preConfirm: () => {
      user = document.getElementById("user").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
      if (!user) {
        Swal.showValidationMessage("Ingrese un nombre para la cuenta");
        return false;
      }
      if (!email) {
        Swal.showValidationMessage("Ingrese un E-Mail para la cuenta");
        return false;
      }
      if (!password) {
        Swal.showValidationMessage("Ingrese una contraseña para la cuenta");
        return false;
      }
      if (!confirmPassword) {
        Swal.showValidationMessage("Confirme la contraseña");
        return false;
      }
      if (password != confirmPassword) {
        Swal.showValidationMessage("Las contraseñas son diferentes");
        return false;
      }
      dataBase[user]={}
      dataBase[user].email = email
      dataBase[user].password = password
      dataBase[user].role = "user"
      saveData()
      Toastify({
        text: "Usuario creado",
        duration: 3000,
        gravity: "bottom", 
        position: "right",
        backgroundColor: "#E9E9E9",
        style: {
          border: "solid 2px #CCD5D9",
          color: "#071D26",
        }
      }).showToast();
      return true
      
    }
  })
}

//  Si se logueo una cuenta aparecera su nombre y por debajo un boton para cerrar sesion
//  Aparecera un mensaje dando la bienvenida al usuario
//  Si se recarga la pagina, seguira estando logueado
//  Si se pulsa el boton para cerrar sesion, volverá a aparecer para ingresar usuario

async function accountLoged() {
  localStorage.setItem('currentUser', user)
  logDiv.innerHTML = `<div id="account"><h6><i class="bi bi-person-circle"></i> ${user} </h6>
                      <button type="button" class="btn btn-outline-danger btn-sm" id="logout">Cerrar sesion</button></div>`
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: "Bienvenido " + user,
  });
  let logout = document.getElementById("logout")
  logout.addEventListener("click", function () {
    localStorage.removeItem('currentUser')
    logDiv.innerHTML = `<div id="login"><h6><i class="bi bi-person-fill"></i> Ingresar usuario</h6></div>`
    let loginDiv = document.getElementById("login")
    loginDiv.addEventListener("click", loginAccount)
  })
}

//  Guarda las cuentas en la base de datos

function saveData() {
  localStorage.setItem("loginSystem", JSON.stringify(dataBase))
}

//  En caso de no haber cuentas en la base de datos, se creara automaticamente la cuenta administradora

if (!dataBase) {
  loadDataBase();
}

function loadDataBase() {
  dataBase = {
    TomasBranca: {
      email: "tomi.brancat@gmail.com",
      password: "beniloli7",
      role: "admin",
    }
  };
}

let logDiv = document.getElementById("log");

let user = localStorage.getItem('currentUser')

let accountDiv = document.getElementById("account")

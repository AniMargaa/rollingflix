class Usuario {
  constructor(nombre, username, email, password) {
    this.nombre = nombre;
    this.username = username;
    this.email = email;
    this.constraseña = password;
  }
}

let usuarios = [];


const agregarUsuario = function () {
    
    let inputEmail = document.querySelector("#input_email").value;
    let inputUsername= document.querySelector("#input_username").value;
    let inputPassword = document.querySelector("#input_password").value;


    if(inputEmail.search('@') != -1) 
    {
      let datos = {
        email: inputEmail,
        username: inputUsername,
        constraseña: inputPassword
      };


      if(localStorage.usuarios != null)
      {
        usuarios = JSON.parse(localStorage.usuarios);
      }

      usuarios.push(datos);

      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      location.replace("../index.html"); 
    }
    else
    {
      alert("Debe ingresar un email válido");
    }
  };


  if(document.getElementById("formulario") != null)
  {
    document.querySelector("#formulario").addEventListener("submit", function (e) {
      e.preventDefault();
      agregarUsuario();
    });
  }


  const validarDatos = function () {
    let inputEmail = document.querySelector("#input_email").value;
    let inputpassword= document.querySelector("#input_password").value;
  
    usuarios = JSON.parse(localStorage.usuarios);

  
    function validar_email (usuario){ 
      return usuario.email === inputEmail;
    }

    function validar_password (usuario){ 
      return usuario.constraseña === inputpassword;
    }

    if (usuarios.find(validar_email)) { 
      if (usuarios.find(validar_password)) {
        
        let result = usuarios.filter(obj => { 
          return obj.email === inputEmail 
        });


        localStorage.setItem("usuarioLogeado", JSON.stringify(result[0].username));

        if (result[0].username === 'admin') {
          location.replace("../admin.html");
          return;
        }


        location.replace("../index.html"); 
        
      } else {
        alert("Email o password incorrecto"); 
      }
    } else {
      alert("Email o password incorrecto");
    }
  };

  if(document.getElementById("formularioDelIndex") != null)
  {
    document.querySelector("#formularioDelIndex").addEventListener("submit", function (e) {
      e.preventDefault();
      validarDatos();
    });
  }
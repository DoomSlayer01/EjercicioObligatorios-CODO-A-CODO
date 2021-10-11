    let submitBtn = document.getElementById("btn-submit")

    submitBtn.addEventListener ( "click", (e) =>{
    
        let usuario   = document.getElementById("usuario").value
        let password  = document.getElementById("password").value
        exprVacia = /^\s*$/
        
        e.preventDefault() //Evita el envío del formulario hasta comprobar

        if (usuario.includes("@") && !exprVacia.test(password)){
            document.getElementById("formulario").submit()
        }
        if ((exprVacia.test(usuario) && exprVacia.test(password))||(!(usuario.includes("@")) && exprVacia.test(password))){
            alert("error : No se ingreso @ y el campo contraseña esta vacío")
        }
        if (usuario.includes("@") && exprVacia.test(password)){
            alert("email inválido : El campo contraseña esta vacío")
        }
        if (!usuario.includes("@") && !exprVacia.test(password)){
            alert("email inválido : ingrese @ porfavor")
        }
    })

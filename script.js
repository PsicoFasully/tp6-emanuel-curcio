
class User{
    constructor(nombre, apelldio, mail){

        this.nombre = nombre
        this.apelldio = apelldio
        this.mail = mail


    }

}
const usuario = []
const boton = document.getElementById("boton1")
const div = document.getElementById("idDiv")



const form = document.getElementById("idform")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let mail = document.getElementById("mail").value

    const user =new User(nombre, apellido, mail)
    usuario.push(user)
    console.log(usuario)
    form.reset()

})

boton.addEventListener("click", ()=>{
    usuario.forEach(user => {
        div.innerHTML += `
        
                    <h5>${user.nombre}</h5>
                    <p>${user.apellido} </p>
                    <p>${user.mail} </p>
        
        
        
        `
    });

})

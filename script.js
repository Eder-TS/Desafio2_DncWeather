function Validations() {
    NameValidation()
}
/*function NameValidation(){
    let firstName = document.getElementById("first_name").value
    if (firstName.length < 3 || firstName.typeof == Number) {
        alert("Preencha um nome válido")
        return
    }
}*/
function NameValidation(){
    let firstName = document.getElementById("first_name").value
    const pattern = /[^a-zà-ú]/gi;
    
    let validanome = firstName.match(pattern)

    if (validanome || !firstName){
        console.log("Erro")
    } else {
        console.log("ok")
    }    
}
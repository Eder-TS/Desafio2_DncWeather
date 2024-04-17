function NameValidation(){
    let firstName = document.getElementById("first_name").value
    const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/
    
    let itsValid = firstName.match(namePattern)

    if (!itsValid){
        alert("Insira um nome válido, com no mínimo 2 caracteres e sem números ou caracters especiais (/\\|?@#$%).")
        return
    } else {
        EmailValidation()
    }    
}

function EmailValidation(){
    let email = document.getElementById("email").value
    const emailPattern = /^[a-z0-9]+@+[a-z0-9]+[.a-z]+[^ ]+$/

    let itsValid = email.match(emailPattern)

    if (!itsValid){
        alert("Insira um email válido, contendo algum conteúdo, um @ e o restante do endereço.)")
        return
    } else {
        CepValidation() 
    }  
    
}

function CepValidation(){
    let cep = document.getElementById("cep").value
    const cepPattern = /^[0-9]{8}$/

    let itsValid = cep.match(cepPattern)

    if (!itsValid){
        alert("Insira um cep válido, contendo oito (8) números, sem espaços e sem hífen ou outros caracteres.")
        return
    } else {
        LatitudeValidation()
    }
}

function LatitudeValidation(){
    let latitude = document.getElementById("latitude").value
    const latitudePattern = /^(-?[0-9]{2}[.]+[0-9]{2}$)/

    let itsValid = latitude.match(latitudePattern)

    if (!itsValid){
        alert("Insira uma latitude válida, contendo 4 dígitos, apenas números e ponto como 12.34. Pode ser usado um hífen no início para indicar latitude sul.")
        return
    } else {
        LongitudeValidation()
    }
}

function LongitudeValidation(){
    let longitude = document.getElementById("longitude").value
    const longitudePattern = /(-?[0-9]{2}[.]+[0-9]{2}$)/

    let itsValid = longitude.match(longitudePattern)

    if (!itsValid){
        alert("Insira uma longitude válida, contendo 4 dígitos, apenas números e ponto como 12.34. Pode ser usado um hífen no início indicar longitude oeste.")
        return
    } else {
        FormSubmit()
    }
}

function FormSubmit(){
    GetAdressByCep()
    GetWeatherByCoordinates()
}

async function GetAdressByCep(){
    const cep = document.getElementById("cep").value

    try {
        const response = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
        const data = await response.json()
        
        if (data.erro){
            alert("CEP inválido")
            return
        }

        document.getElementById("street").innerHTML = data.logradouro
        document.getElementById("neighborhood").innerHTML = data.bairro
        document.getElementById("city_state").innerHTML = data.localidade + "/" + data.uf
        console.log(data)

        window.location.href = "#output_adress"
    } catch (error) {
        alert("CEP inválido")
    }
}

async function GetWeatherByCoordinates() {
    const latitude = document.getElementById('latitude').value
    const longitude = document.getElementById('longitude').value

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + 
            '&longitude=' + longitude + '&current=temperature_2m')
   
        const data = await response.json()

        document.getElementById('temperature').innerHTML = data.current.temperature_2m + "°C"

    } catch (error) {
        alert("Coordenadas inválidas") 
    }
    
}

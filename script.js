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
        alert("Insira um cep válido, contendo oito (8) números, sem espaços e sem hífen ou outros caracteres.)")
        return
    } else {
        LatitudeValidation()
    }
}

function LatitudeValidation(){
    let latitude = document.getElementById("latitude").value
    const latitudePattern = /(-?[0-9]{2}[.]+[0-9]{4}$)/

    let itsValid = latitude.match(latitudePattern)

    if (!itsValid){
        alert("Insira uma latitude válida, contendo apenas números e ponto como 12.3456, pode ser usado hífen para indicar latitude sul.")
        return
    } else {
        LongitudeValidation()
    }
}

function LongitudeValidation(){
    let longitude = document.getElementById("longitude").value
    const longitudePattern = /(-?[0-9]{2}[.]+[0-9]{4}$)/

    let itsValid = longitude.match(longitudePattern)

    if (!itsValid){
        alert("Insira uma longitude válida, contendo apenas números e ponto como 12.3456, pode ser usado hífen para indicar longitude oeste.")
        return
    } else {
        FormSubmit()
    }
}

function FormSubmit(){
    GetAdressByCep()
    //GetWeatherByCoordinates()
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
        console.log(error.message)
    }




    /*fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then((response) => {
            return response.json()
        })
        .then((response) => {

            document.getElementById("street").innerHTML = response.logradouro
            document.getElementById("neighborhood").innerHTML = response.bairro
            document.getElementById("city_state").innerHTML = response.localidade + "/" +response.uf

            window.location.href = "#output_adress"
        })
        .catch((error) => {
            //alert(error.message)
            //console.log(error.message)
            console.log(error)
        })*/
}

/*async function pegaClimaPelaCoordenada() {
    const lat = document.getElementById('latitude').value
    const lon = document.getElementById('longitude').value


    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + lat + 
            '&longitude=' + lon + '&hourly=temperature_2m')
   
        const data = await response.json()
        console.log(data)

        for (let index = 0; index < data.hourly.temperature_2m.length; index++) {
            
            console.log(data.hourly.time[index], data.hourly.temperature_2m[index])
            const hora = data.hourly.time[index]
            const temperatura = data.hourly.temperature_2m[index]
            
            document.getElementById('respostas').innerHTML += "<div>" + hora + " " + temperatura + "°C </div>"
        }

    } catch (error) {
        alert(error.message)
    }
    
}

function pegaEnderecoPeloCep() {
    const cep = document.getElementById("cep").value

    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}*/
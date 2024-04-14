function EmailValidation(){
    let test = document.getElementById("test").value
    const testPattern = /(-?[0-9]{2}[.]+[0-9]{2}$)/

    let itsValid = test.match(testPattern)

    if (!itsValid){
        console.log("erro")
        console.log(test)
        console.log(itsValid)
    } else {
        console.log(itsValid)
    }
}
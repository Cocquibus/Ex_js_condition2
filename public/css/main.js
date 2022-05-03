function un() {
    let x = prompt("nbr1")
    let y = prompt("nbr2")
    if (x == y) {
        alert("egal")
    }
}
function deux() {
    let x = prompt("nbr1")
    let y = prompt("nbr2")
    if (x < y) {
        alert("x est inferieur")
    }
    else {
        alert("x est superieur")
    }
}
function trois() {
    let x = prompt("nbr1")
    let y = prompt("nbr2")
    let z = prompt("nbr3")
    x = x + y
    if (x < z) {
        console.log("plus petit que z")
    }
    else {
        console.log("plus grand que z")
    }
}
function quatre() {
    let phrase = prompt("phrase: ")
    let estimation = prompt("estimation: ")
    if (estimation == phrase.replaceAll(" ", "").length) {
        console.log("reussi")
    }
    else {
        console.log("faux")
    }
}
function cinq() {
    let prenom = prompt("prenom")
    if (prenom == "") {
        prenom = prompt("attention")
    }
    else {
        console.log("bonjour")
    }
}
function six() {
    let x = 1
    while (x == 1) {
        let validabo = confirm("voulez vous vous abo")
        if (validabo == true) {
            let validriche = confirm("voulez vous la version riche")
            if (validriche == true) {
                console.log("version riche")
                x = 0
            }
            else {
                let validpauvre = confirm("voulez vous pauvre")
                if (validpauvre == true) {
                    console.log("tu es abo pauvre")
                    x = 0
                }
                else {
                    let reponse = confirm('voulez vous refaire')
                    if (reponse == false) {
                        x = 0
                    }
                }
            }
        }
    }
}
function sept(){
    let x =  1
    let rep1 = "maison"
    let rep2 = "appart"
    let q1 = prompt("je suis une maison")
    let q2 = prompt("je suis un appart")
    while (x == 1 ){
        if(q1 == rep1 && q2 == rep2 ){
            console.log('tout juste')
            x = 0
        }
        else if(q1 == rep1 && q2 != rep2){
            console.log("reponse 2 fausse")
            while(x == 1){
                q2 = prompt("je suis un appart")
                if(q2 == rep2){
                    x = 0
                }
            }
        }
        else if (q1 != rep1 && q2 == rep2){
            console.log("reponse 1 fausse")
            while(x == 1){
                q1 = prompt("je suis une maison")
                if(q1 == rep1){
                    x = 0
                }
            }
        }
        else if(q1 != rep1 && q2 != rep2){
            console.log("tes nul")
            x = 0
        }
    }
}
function huit(){
let age = prompt("age: ")
    if(age <= 0){
        console.log("invisible")
    }
    else if (age < 18){
        console.log("mineur")
    }
    else if (age == 18){
        console.log("pile")
    }
    else if (age > 100){
        console.log("mort")
    }
}
function neuf(){
    let riche = confirm("riche?")
    let vacance = confirm("voulez vous des vacances")
    let chat = confirm("avez vous un chat")
    if(vacance != true){
        console.log("part pas alors")
    }
    else if(riche == false || chat == true){
        console.log("tu peux pas partir")
    }
    else if (chat == false && vacance == true){
        console.log("parfait")
    }
    else if (riche == true && chat == false){
        console.log("riche et sans chat")
    }
}
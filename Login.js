function valido() {
    const text = document.getElementById("text")
    const password = document.getElementById('password')
    const email = document.getElementById("email")
    const text1 = document.getElementById("text1")
    const email1 = document.getElementById("email1")

    if ((text == null) && (password == null) && (email == null)) {
        alert("Mbush te dhenat per tu regjistruar")
    }
    if ((text == null) && (password == null)) {
        alert("Mbush te dhenat per tu kyçur")
    }
    if ((text1 == null) && (email1 == null)) {
        alert("Mbush te dhenat per te jap mendimin tuaj")
    }
}
function setvars() {
    const postbutton = document.getElementById("postbutton")
    postbutton!.addEventListener('mouseenter', function(event) {
        const posta = event.target as HTMLButtonElement
        posta.style.backgroundColor="#003170"
    })
    postbutton!.addEventListener('mouseleave', function(e) {
        const postb = e.target as HTMLButtonElement
        postb.style.backgroundColor="#004AAD"
    })
}

function getinput() {
    var account = document.getElementById("account")
    var text = document.getElementById("text")
    console.log((account as HTMLInputElement).value)
    console.log((text as HTMLInputElement).value)
}
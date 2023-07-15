function setvars() {
    var postbutton = document.getElementById("postbutton");
    postbutton.addEventListener('mouseenter', function (event) {
        var posta = event.target;
        posta.style.backgroundColor = "#003170";
    });
    postbutton.addEventListener('mouseleave', function (e) {
        var postb = e.target;
        postb.style.backgroundColor = "#004AAD";
    });
}
function getinput() {
    var account = document.getElementById("account");
    var text = document.getElementById("text");
    console.log(account.value);
    console.log(text.value);
}
//# sourceMappingURL=script.js.map
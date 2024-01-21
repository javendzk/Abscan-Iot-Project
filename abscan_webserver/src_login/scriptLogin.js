//Fungsi login yang simpel untuk proof of concept

function cekPassword() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username === "admin" && password === "12345") {
        window.location.replace("admin_dashboard.html");
    }
    
    else {
        alert("Username atau password salah!");
    }
}
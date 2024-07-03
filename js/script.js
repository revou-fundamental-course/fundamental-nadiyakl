
let who = prompt("What we should call you?", "");
document.getElementById("who").innerHTML = who

function submitForm() {
    var nama = document.getElementById("nama").value;
    var emails = document.getElementById("emails").value;
    var judul = document.getElementById("judul").value;
    var pesan = document.getElementById("pesan").value;

    var outputString = "Name: " + nama + "<br>" +
        "Email: " + emails + "<br>" +
        "Subject: " + judul + "<br>" +
        "Message: " + pesan;

    document.getElementById("output").innerHTML = outputString;
}
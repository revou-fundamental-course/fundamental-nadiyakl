
/* banner slide */


/* input name */
let who = prompt("What we should call you?", "");
document.getElementById("who").innerHTML = who


/* form */
function submitForm() {
    var nama = document.getElementById("nama").value;
    var emails = document.getElementById("emails").value;
    var judul = document.getElementById("judul").value;
    var pesan = document.getElementById("pesan").value;

    console.log(nama);
    console.log(emails);
    console.log(judul);
    console.log(pesan);

/* output */

    var outputString = "Name: " + nama + "<br>" +
        "Email: " + emails + "<br>" +
        "Subject: " + judul + "<br>" +
        "Message: " + pesan;

    document.getElementById("output").innerHTML = outputString;

/* validation */

    if (nama != '' && emails != '' && judul != '' && pesan != '') {
        alert('Your Message Sent!');
    }

    else {
        alert('Fill the blank!');
    }
}
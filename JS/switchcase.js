function tampilkanPesan() {
    var pilihan = document.getElementById("pilihan").value;
    var hasil = document.getElementById("hasil");

    switch (pilihan) {
        case "pilihan1":
            hasil.innerText = "Lord memilih Pilihan 1!";
            break;
        case "pilihan2":
            hasil.innerText = "Lord memilih Pilihan 2!";
            break;
        case "pilihan3":
            hasil.innerText = "Lord memilih Pilihan 3!";
            break;
        default:
            hasil.innerText = "Pilihan Lord  tidak valid!";
    }
}

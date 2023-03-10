//Login Sederhana

function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "https://www.google.com/search?q=google&oq=google+&aqs=chrome..69i57j35i39l2j69i60l5.9544j0j7&sourceid=chrome&ie=UTF-8";
    } else if (username === "" || password === "") {
        alert("Password atau Username Tidak boleh kosong");
    } else {
        alert("Username atau password salah!");
    }
}

//Tutup Login Sederhana

//Perhitungan Grade Nilai

function hitungNilai() {
    var nilai = parseInt(document.getElementById("nilai").value);
    var grade;
    
    if (nilai >= 80 && nilai <= 100) {
      grade = "A";
    } else if (nilai >= 60 && nilai <= 80) {
      grade = "B";
    } else if (nilai >= 40 && nilai <= 60) {
      grade = "C";
    } else if (nilai >= 0 && nilai <= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    
    alert("Grade Anda adalah: " + grade);
  }

  //Tutup Perhitungan Grade Nilai

  //Perulangan For
  function nama() {
    let inputNama = document.getElementById("nama").value;
    let pesan = "";
    
    for (let i = 1; i <= 20; i++) {
      pesan += inputNama + " kamu orang ke " + i + "\n";
    }
    alert("Ini adalah Perulangan For\n" + pesan);
  }
  
  
  //Tutup Perulangan For


  //Perulangan While

  function namaWhile() {
    let inputNama = document.getElementById("while").value;
    let i = 1;
    let pesan = "";
    while (i <= 20) {
      pesan += inputNama + " kamu orang ke " + i + "\n";
      i++;
    }
    alert("Ini adalah Perulangan While\n" + pesan);
  }  
  
  //Tutup Perulangan While


//Piramin
function piramin(levels) {
  let pattern = '';
  for (let i = 1; i <= levels; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      output += '* ';
    }
    pattern += output + '\n';
  }
  return pattern;
}

function displayPiramin() {
  let piraminPattern = piramin(8);
  alert("Ini adalah pola bintang piramida:\n\n" + piraminPattern);
}

  //Tutup Piramin

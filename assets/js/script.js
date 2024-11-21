document.addEventListener("DOMContentLoaded", function() {
    var kalimat = "Informasi cara pemain Timnas Indonesia dapet status WNI.";
    var container = document.getElementById("kalimat");
    var words = kalimat.split("");
    var index = 0;

    function displayWord() {
        container.innerHTML = ""; 
        var interval = setInterval(function() {
            container.innerHTML += words[index];
            index++;

            if (index === words.length) {
                clearInterval(interval); 
                index = 0; 
                setTimeout(displayWord, 720); // Tunda 0.75 detik sebelum mengulang
            }
        }, 100); // Tampilkan huruf setiap 100 milidetik
    }

    displayWord(); 
});
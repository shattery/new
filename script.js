function erklärung(überschrift, erklärungs_txt) {
    document.getElementById("erklärung ").innerHTML = `<h1>${überschrift}</h1><p>${erklärungs_txt}</p>`;
}

function qw(frage, m1, m2, m3, m4, antwort) {
    document.getElementById("erklärung").innerHTML = `<p> ${frage} </p> <br>
    <button>${m1}</button> <br> <br>  <button>${m2}</button> <br> <br> <button>${m3}</button> <br> <br> <button>${m4}</button> <br> <br> `
}




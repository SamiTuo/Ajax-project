var tulos = document.getElementById("tulos");
//Luodaan kuuntelija painikkeelle, joka ajaa funktion changeCountry
document.getElementById("button").addEventListener("click", changeCountry);

//luodaan uusi XMLHttppyyntö
var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    //Tarkistetaan että tiedot ovat ladanneet
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      //otetaan tiedot talteen JSON muodossa
      var json = JSON.parse(xmlhttp.responseText);
      tulos.innerHTML = "Tartunnan saaneita: " + json[13].infected
      tulos.innerHTML += "<br><br> Testattuja: " + json[13].tested
      tulos.innerHTML += "<br><br> Kuolleita: " + json[13].deceased
    }
  }

//Funktio joka käy läpi käyttäjän valitseman tiedon ja tämän perusteella näyttää sen
function changeCountry() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true", true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      var json = JSON.parse(xmlhttp.responseText);
      
      var country = document.getElementById("maat").value;

      if (country == "suomi") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[13].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[13].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[13].deceased

      } else if (country == "viro") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[12].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[12].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[12].deceased

      } else if (country == "ruotsi") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[42].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[42].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[42].deceased

      } else if (country == "norja") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[27].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[27].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[27].deceased
      
      } else if (country == "iso-britannia") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[45].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[45].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[45].deceased
      
      } else if (country == "yhdysvallat") {
        tulos.innerHTML = "Tartunnan saaneita: " + json[46].infected
        tulos.innerHTML += "<br><br> Testattuja: " + json[46].tested
        tulos.innerHTML += "<br><br> Kuolleita: " + json[46].deceased
      
      }
    }
  }

}
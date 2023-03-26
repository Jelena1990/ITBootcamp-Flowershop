//galerija

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

let btnIzracunaj = document.querySelector("#izracunaj");
let btnResetuj = document.querySelector("#resetuj");

let ukupno = 0;
let ukupno2 = 0;

btnIzracunaj.addEventListener("click", () => {
  let ruze = document.getElementById("ruze").value;
  let ukupnoRuze = ruze * 150;
  //--------------------------------------------------------------
  let ljiljani = document.getElementById("ljiljani").value;
  let ukupnoLjiljani = ljiljani * 120;
  //-------------------------------------------------------------
  let gerberi = document.getElementById("gerberi").value;
  let ukupnoGerberi = gerberi * 70;
  //------------------------------------------------------------
  let bombonjera = document.querySelector("#bombonjera").checked;
  let cenaBombonjere = 0;
  if (bombonjera == true) {
    cenaBombonjere = 500;
  }
  //-------------------------------------------------------------
  let cokolada = document.querySelector("#cokolada").checked;
  let cenaCokolade = 0;
  if (cokolada == true) {
    cenaCokolade = 500;
  }
  //------------------------------------------------------------------
  let sampanjac = document.querySelector("#sampanjac").checked;
  let cenaSampanjca = 0;
  if (sampanjac == true) {
    cenaSampanjca = 500;
  }
  //----------------------------------------------------------------------------------
  let placanje = document.querySelector('input[name="placanje"]:checked').value;

  ukupno =
    ukupnoRuze +
    ukupnoLjiljani +
    ukupnoGerberi +
    cenaBombonjere +
    cenaCokolade +
    cenaSampanjca;

  if (placanje == "kartica" && ukupno > 2000) {
    ukupno2 = ukupno - (ukupno / 100) * 10;
  } else {
    ukupno2 = ukupno;
    document.getElementById("cenasap").style.display = "none";
  }
  //-------------------------------------------------------------------------------------------
  let broj_ruza = 0;
  for (let i = 0; i < ruze; i = i + 1) {
    broj_ruza += 1;
  }
  if (broj_ruza == 0) {
    document.getElementById("ruzeCvetovi").style.display = "none";
  } else {
    document.getElementById(
      "ruzeCvetovi"
    ).innerHTML += `<img src=\"ruza.png\" width=\"50px\" height=\"50px\"> x ${broj_ruza}`;
  }
  //------------------------------------------------------------------------------------------
  let broj_ljiljani = 0;
  for (let i = 0; i < ljiljani; i = i + 1) {
    broj_ljiljani += 1;
  }
  if (broj_ljiljani == 0) {
    document.getElementById("ljiljaniCvetovi").style.display = "none";
  } else {
    document.getElementById(
      "ljiljaniCvetovi"
    ).innerHTML += `<img src="ljiljan.png" width="50px" height="50px"> x ${broj_ljiljani}`;
  }
  //--------------------------------------------------------------------------------------------
  let broj_gerberi = 0;
  for (let i = 0; i < gerberi; i = i + 1) {
    broj_gerberi += 1;
  }
  if (broj_gerberi == 0) {
    document.getElementById("gerberiCvetovi").style.display = "none";
  } else {
    document.getElementById(
      "gerberiCvetovi"
    ).innerHTML += `<img src="gerber.png" width="50px" height="50px"> x ${broj_gerberi}`;
  }
  //--------------------------------------------------------------------------------------------
  if (bombonjera == true) {
    document.getElementById("bombonjerapoklon").innerHTML =
      '<span style="font-size:20px" "font-weight: 600" > + Candy box</span>';
    document.getElementById("bombonjerapoklon").innerHTML +=
      '<img src="bombonjera.png" width="60px" height="60px">';
  }
  //----------------------------------------------------------------------------------------------
  if (cokolada == true) {
    document.getElementById("cokoladapoklon").innerHTML =
      '<span style="font-size:20px" "font-weight: 600" > + Chocolate</span>';
    document.getElementById("cokoladapoklon").innerHTML +=
      '<img src="cokolada.png" width="60px" height="60px">';
  }
  //---------------------------------------------------------------------------------------------------
  if (sampanjac == true) {
    document.getElementById("sampanjacpoklon").innerHTML =
      '<span style="font-size:20px" "font-weight: 600" > + Champagne</span>';
    document.getElementById("sampanjacpoklon").innerHTML +=
      '<img src="sampanjac.png" width="60px" height="60px">';
  }
  //--------------------------------------------------------------------------------------------------------
  document.getElementById(
    "cenasap"
  ).innerHTML = `<span style="font-size:20px" "font-weight: 600" "white-space: pre"> You got a discount! The discounted price is only: ${ukupno2} rsd</span>`;
  document.getElementById(
    "cenabezp"
  ).innerHTML = `<span style="font-size:20px" "font-weight: 600" "white-space: pre" > Your bill amounts to: ${ukupno} rsd</span>`;
});

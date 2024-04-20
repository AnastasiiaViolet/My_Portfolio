// Hamburger
//pobiera elemnt
const myBody = document.querySelector("body");
const mobileNavLinki = document.querySelector(".linki");
const mobileNav = document.querySelector("nav");
const mobileButton = document.querySelector(".burger");
let mobilewrapper;
let zainteres;

mobileButton.classList.toggle("js"); //jeśli js podłączył się poprawnie
mobileNavLinki.classList.toggle("js");
mobileNav.classList.toggle("js");

function toggleAnimations(selector) {
  document.querySelector(selector).classList.toggle("stopped");
}
const navigacja = document.querySelectorAll(".Navigacja");

function dodaj(objekt) {
  let i;
  for (i = 0; i < objekt.length; i += 1) {
    objekt[i].classList.toggle("js");
  }
}
function dodaj2(objekt) {
  let i;
  for (i = 0; i < objekt.length; i += 1) {
    objekt[i].classList.toggle("active");
  }
}
function usunincie() {
  const id_usun = [
    "bez_js1",
    "bez_js2",
    "bez_js3",
    "bez_js4",
    "bez_js5",
    "bez_js6",
  ];

  for (let i = 0; i < id_usun.length; i++) {
    var elementDoUsuniecia = document.getElementById(id_usun[i]);
    if (elementDoUsuniecia) {
      elementDoUsuniecia.parentNode.removeChild(elementDoUsuniecia);
    } else {
      console.log("Element o id " + id_usun[i] + " nie istnieje.");
    }
  }
}

function loadIMG(url, id, class_picture, class_img, sor1, sor2, sor3) {
  //async dodć jeśli await
  // await new Promise((r) => setTimeout(r, 1500));
  let P = new Promise(function (resolve, reject) {
    let parent = document.getElementById(id);
    let picture = document.createElement("picture");
    let source1 = document.createElement("source");
    let source2 = document.createElement("source");
    let source3 = document.createElement("source");
    let img = document.createElement("img");

    img.setAttribute("src", url);
    img.setAttribute("alt", url);
    // img.setAttribute("width", "30%");
    img.classList.add(class_img);
    if (class_picture !== null) {
      picture.classList.add(class_picture);
    }

    source1.media = "(min-width: 800px)";
    source2.media = "(min-width: 600px)";
    source3.media = "(min-width: 300px)";

    source1.srcset = sor1;

    source2.srcset = sor2;

    source3.srcset = sor3;

    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(source3);
    picture.appendChild(img);

    parent.appendChild(picture);
    img.onload = function () {
      resolve(url);
    };
    img.onerror = function () {
      reject(url);
    };
  });
  return P;
}

dodaj(navigacja);

if (myBody.id === "index") {
  //sprawdzamy która to strona, bo w przeciwnym przypadku ynika bląd, że Kolo2 nie ma na stronie galerija
  //   console.log('Id елемента рівний "index"');
  mobilewrapper = document.querySelector(".wrapper");
  let pierwszy = document.getElementById("PierwszaCzesc_index");
  mobileButton.addEventListener("click", function () {
    pierwszy.classList.toggle("active");
    mobilewrapper.classList.toggle("active");
    //toggle bo to przelocznik przy kliku ponownie
    dodaj2(navigacja);
    // navigacja.classList.toggle("active");
    mobileNavLinki.classList.toggle("active");
    mobileButton.classList.toggle("active");
  });
  document.querySelector(".Kolo2").addEventListener("click", function () {
    toggleAnimations(".Kolo");
    // this.classList.toggle("stopped"); //doda klas jeśli nie istnieje i usunie jeśli istnieje
    toggleAnimations(".Kolo2");
  });
  document.querySelector(".Kolo").addEventListener("click", function () {
    toggleAnimations(".Kolo");
    toggleAnimations(".Kolo2");
  });
} else if (myBody.id === "projekt") {
  //   console.log('Id елемента рівний "projekt"');
  mobilewrapper = document.querySelector(".wrapperPro");
  let projekty = document.querySelector(".projekty");
  mobileButton.addEventListener("click", function () {
    projekty.classList.toggle("active");
    mobilewrapper.classList.toggle("active");
    dodaj2(navigacja);
    mobileNavLinki.classList.toggle("active");
    mobileButton.classList.toggle("active");
  });
  const selectors = [".KoloPro1", ".KoloPro2", ".KoloProMal"];
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).addEventListener("click", function () {
      for (let j = 0; j < selectors.length; j++) {
        toggleAnimations(selectors[j]);
      }
    });
  }
} else if (myBody.id === "zainter") {
  //   console.log('Id елемента рівний "zainter"');
  mobilewrapper = document.querySelector(".wrapperZai");
  zainteres = document.querySelector(".zainterysow_info");
  mobileButton.addEventListener("click", function () {
    zainteres.classList.toggle("active");
    mobilewrapper.classList.toggle("active");
    dodaj2(navigacja);
    mobileNavLinki.classList.toggle("active");
    mobileButton.classList.toggle("active");
  });
  const selectors = [
    ".KoloZain",
    ".KoloZain2",
    ".KoloMale",
    ".KoloMale2",
    ".KoloMale3",
    ".KoloMale4",
    ".KoloMale5",
  ];
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).addEventListener("click", function () {
      for (let j = 0; j < selectors.length; j++) {
        toggleAnimations(selectors[j]);
      }
    });
  }
} else if (myBody.id === "galeria") {
  usunincie();
  Promise.all([
    loadIMG(
      "./zdjencia/0.5.jpg",
      "kolona1",
      "KoloGale",
      "ZdjencieGal",
      "./zdjencia/3.800.jpg",
      "./zdjencia/6.640.jpg",
      "./zdjencia/0.7.jpg"
    ),
    loadIMG(
      "./zdjencia/0.6.jpg",
      "kolona1",
      null,
      "ZdjencieGal3",
      "./zdjencia/7.800.jpg",
      "./zdjencia/3.640.jpg",
      "./zdjencia/0.2.jpg"
    ),
    loadIMG(
      "./zdjencia/0.3.jpg",
      "kolona1",
      "KoloGale3",
      "ZdjencieGal",
      "./zdjencia/4.800.jpg",
      "./zdjencia/2.640.jpg",
      "./zdjencia/0.5.jpg"
    ),
    loadIMG(
      "./zdjencia/0.7.jpg",
      "kolona2",
      null,
      "ZdjencieGal2",
      "./zdjencia/6.800.jpg",
      "./zdjencia/5.640.jpg",
      "./zdjencia/0.4.jpg"
    ),
    loadIMG(
      "./zdjencia/0.4.jpg",
      "kolona2",
      "KoloGale2",
      "ZdjencieGal",
      "./zdjencia/2.800.jpg",
      "./zdjencia/7.640.jpg",
      "./zdjencia/0.6.jpg"
    ),
    loadIMG(
      "./zdjencia/0.2.jpg",
      "kolona2",
      null,
      "ZdjencieGal4",
      "./zdjencia/5.800.jpg",
      "./zdjencia/4.640.jpg",
      "./zdjencia/0.3.jpg"
    ),
  ])
    .then(function () {
      console.log("Wszystko z równoległej się załadowało!");
    })
    .catch(function () {
      console.log("Błąd ładowania galerii rownoległej");
    });

  const selectors = [
    //problem z stopped nie działa dzaila tylko gdy definiujemy cklik po dodaj
    ".KoloGale",
    ".KoloGale2",
    ".KoloGale3",
  ];
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).addEventListener("click", function () {
      for (let j = 0; j < selectors.length; j++) {
        toggleAnimations(selectors[j]);
      }
    });
  }

  mobilewrapper = document.querySelector(".wrapperGale");
  zainteres = document.querySelector(".NagluwekGaleria");
  mobileButton.addEventListener("click", function () {
    zainteres.classList.toggle("active");
    mobilewrapper.classList.toggle("active");
    dodaj2(navigacja);
    mobileNavLinki.classList.toggle("active");
    mobileButton.classList.toggle("active");
  });

  // console.log("Galeria zdjęć ładowanych sekwencyjnie");
  // loadIMG(
  //   "./zdjencia/0.5.jpg",
  //   "kolona1",
  //   "KoloGale",
  //   "ZdjencieGal",
  //   "./zdjencia/3.800.jpg",
  //   "./zdjencia/6.640.jpg",
  //   "./zdjencia/0.7.jpg"
  // )
  //   .then(function () {
  //     console.log("pierwszy z sekwencyjnej załadowany");
  //     var pr = loadIMG(
  //       "./zdjencia/0.6.jpg",
  //       "kolona1",
  //       null,
  //       "ZdjencieGal3",
  //       "./zdjencia/7.800.jpg",
  //       "./zdjencia/3.640.jpg",
  //       "./zdjencia/0.2.jpg"
  //     );
  //     return pr;
  //   })
  //   .then(function () {
  //     console.log("drugi z sekwencyjnej załadowany");
  //     var pr = loadIMG(
  //       "./zdjencia/0.3.jpg",
  //       "kolona1",
  //       "KoloGale3",
  //       "ZdjencieGal",
  //       "./zdjencia/4.800.jpg",
  //       "./zdjencia/2.640.jpg",
  //       "./zdjencia/0.5.jpg"
  //     );
  //     return pr;
  //   })
  //   .then(function () {
  //     console.log("trzeci z sekwencyjnej załadowany");
  //   })
  //   .catch(function () {
  //     console.log("Błąd ładowania galerii sekwencyjnej");
  //   });

  // console.log("Galeria zdjęć ładowanych równolegle");
  //usuniencie zdjenć bezpiecznych(tych co ladujo się bez js)
}

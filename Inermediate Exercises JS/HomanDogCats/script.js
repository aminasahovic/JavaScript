// Cilj ovog zadatka je konverzija ljudskih (human) godina u godine psa ili mace.

// Korisnik unosi godine covjeka. Klikom na dugme `Calculate`, treba da se izracunaju godine psa i mace i to prema slijedecim pravilima:

// Cat Years
// - 15 cat years for first year.
// - +9 cat years for second year.
// - +4 cat years for each year after that

// Dog Years
// - 15 dog years for first year
// - +9 dog years for second year
// - +5 dog years for each year after that

// Nakon sto ste izracunali koliko godina ima maca, a koliko pas, trebate ucitati odgovarajucu sliku iz `images` foldera koja predstavlja starost zivotinje (primjetite image tagove sa idem `catImg` i `dogImg`). Slika treba biti ucitana prema slijedecim pravilima:

// Cat
// - Baby cat: godine <= 24
// - Adult cat: godine > 24 i godine <= 44
// - Old cat: godine > 44

// Dog
// - Baby dog: godine <= 24
// - Adult dog: godine > 24 i godine <= 59
// - Old dog: godine > 59

// Takodjer ne zaboravite odraditi validaciju na samoj formi za unos godina. Klikom na dugme `Calculate` prije samog racunanja, treba provjeriti da li su godine uopste unesene i da li su broj. U `index.html` cete primjetiti `humanYearsError` div. Ovaj div sadrzi u sebi error poruku koju je potrebno prikazati ako godine nisu validne. Poruku mozete prikazati ako joj sklonite klasu `hide`, i obratno sakriti je ako joj dodate klasu `hide`.
const humanYears = document.getElementById('humanYears');
const calculateBtn = document.getElementById('calculateBtn');
const dogImg = document.getElementById('dogImg');
const catImg = document.getElementById('catImg');
const catYears = document.getElementById('catYears');
const dogYears = document.getElementById('dogYears');
const humanYearsError = document.getElementById('humanYearsError');

function CatYears(godine) {
    let godineMace = 15;
    if (godineMace == 2) {
        godineMace += 9;
    } else {
        godineMace += 9 + (godine - 2) * 4;
    }

    if (godineMace <= 24) {
        catImg.setAttribute('src', './images/babyCat.png');
    } else if (godineMace > 24 && godineMace <= 44) {
        catImg.setAttribute('src', './images/adultCat.gif');

    }
    else {
        catImg.setAttribute('src', './images/oldCat.jpeg');
    }

    catYears.innerText = godineMace;
}
function DogYears(godine) {
    let godinePsa = 15;
    if (godinePsa == 2) {
        godinePsa += 9;
    } else {
        godinePsa += 9 + (godine - 2) * 4;
    }

    if (godinePsa <= 24) {
        dogImg.setAttribute('src', './images/babyDog.webp');
    } else if (godinePsa > 24 && godinePsa <= 59) {
        dogImg.setAttribute('src', './images/adultDog.png');

    }
    else {
        dogImg.setAttribute('src', './images/oldDog.png');
    }

    dogYears.innerText = godinePsa;
}
function validiraj() {
    if (!humanYears || isNaN(humanYears.value)) {
        humanYearsError.classList.remove('hide');
        return false;
    } else {

        humanYearsError.classList.add('hide');
        return true;
    }
}
calculateBtn.onclick = function () {
    if(validiraj()){
        let godine = humanYears.value;
        CatYears(godine);
        DogYears(godine);
    }
   
}
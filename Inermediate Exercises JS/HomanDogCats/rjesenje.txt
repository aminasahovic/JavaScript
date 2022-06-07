const humanYearsInput = document.getElementById('humanYears');
const calculateBtn = document.getElementById('calculateBtn');
const humanYearsError = document.getElementById('humanYearsError');
const dogYearsControl = document.getElementById('dogYears');
const catYearsControl = document.getElementById('catYears');
const dogImg = document.getElementById('dogImg');
const catImg = document.getElementById('catImg');


function isFormValid() {
    const years = humanYearsInput.value && parseInt(humanYearsInput.value);

    if (!years || years < 0) {
        humanYearsError.classList.remove('hide');
        return false;
    } else {
        humanYearsError.classList.add('hide');
        return true;
    }
}

function calculateDogYears(humanYears) {
    let dogYears = 15;

    if (humanYears >= 2) {
        humanYears -= 2;
        dogYears += 9;

        dogYears += (humanYears) * 5;
    }

    if(dogYears <= 24) {
        dogImg.setAttribute('src', './images/babyDog.webp');
    } else if(dogYears <= 59) {
        dogImg.setAttribute('src', './images/adultDog.png');
    } else {
        dogImg.setAttribute('src', './images/oldDog.png');
    }

    dogYearsControl.innerText = dogYears;
}

function calculateCatYears(humanYears) {
    let catYears = 15;

    if (humanYears >= 2) {
        humanYears -= 2;
        catYears += 9;

        catYears += (humanYears) * 4;
    }

    if(catYears <= 24) {
        catImg.setAttribute('src', './images/babyCat.png');
    } else if(catYears <= 44) {
        catImg.setAttribute('src', './images/adultCat.gif');
    } else {
        catImg.setAttribute('src', './images/oldCat.jpeg');
    }

    catYearsControl.innerText = catYears;
}


calculateBtn.onclick = function () {
    if (isFormValid()) {
        const humanYears = parseInt(humanYearsInput.value);
        calculateDogYears(humanYears);
        calculateCatYears(humanYears);
    }
}
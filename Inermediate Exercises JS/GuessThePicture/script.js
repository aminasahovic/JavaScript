const items = [
    {
        image: './images/cat.png',
        answers: ['cat', 'kitty']
    },
    {
        image: './images/dog.jpeg',
        answers: ['dog']
    },
    {
        image: './images/tree.png',
        answers: ['tree', 'scape']
    },
    {
        image: './images/laptop.webp',
        answers: ['laptop', 'computer']
    },
    {
        image: './images/bird.png',
        answers: ['bird', 'birds']
    }
];
// Cilj ovog zadatka je da napravimo mali kviz. Korisniku se prikazuje slika, te ispod treba unijeti sta je prikazano na slici. Na osnovu toga,
//  program racuna bodove.

// U `script.js` primjetiti cete niz `items`. U ovom nizu svaki objekat predstavlja "pitanje" na kvizu. Pitanje se sastoji od slike koju treba
//  prikazati (image), dok su answers tacni odgovori. Dakle, ono sto korisnik unese u input `answerInput`, treba porediti sa ovim nizom answers. 
//  Te ako je npr za prvo pitanje unio cat, to se smatra tacnim.Sliku ucitavate u image tag sa id-em `image`.

// Klikom na dugme `Next` treba da se prikaze slijedece pitanje. Korisnik ne mora uopste nista unijeti da bi presao na iduce pitanje (ali se u tom
//      slucaju takav odgovor smatra netacnim). Kada dodje na zadnje pitanje i odabere `Next`, treba da se konacni rezultat prikaze u heading-u sa 
//      id-em `result` (da bi se isti prikazao potrebno mu je ukloniti klasu `hide`).

// Takodjer, klikom na dugme `Restart` igra treba da se restarta (prikazuje se prvo pitanje, resetuju se bodovi na nula, sakriva se konacni rezultat).


// ======================================================================================================================
// Za dodatnu vjezbu:
// - Implementirati i Previous button, tako da se korisnik moze vratiti nazad na pitanje i revidirati odgovore. Ali ovo zahtjeva nesto tezu 
// kalkulaciju odgovora. (Ideja: svakom objektu mozete dodati property `osvojenoBodova`)
// - Dodati opciju da se pamti history bodova (mozete uz te informacije pohranjivati datum i vrijeme kad je kviz odigran pa napraviti ljestvicu.)
// ======================================================================================================================

const image = document.getElementById('image');
const answerInput = document.getElementById('answerInput');
const nextBtn = document.getElementById('nextBtn');
const result=document.getElementById('result');
const restartBtn= document.getElementById('restartBtn');
let brojac;
let score;

function ucitajSliku() {
    let slika = items[brojac];
    image.setAttribute('src', slika.image);
    answerInput.value='';
}
function start() {
    brojac = 0;
    score = 0;
    ucitajSliku();
}
function bodovi() {
        let vrijednost = answerInput.value.toLowerCase();

        if (items[brojac].answers.includes(vrijednost)) {
            score++;
        }
}
nextBtn.onclick = function () {
    bodovi();
    if(brojac<(items.length-1)){
        brojac++;
        ucitajSliku();
    }
    else{
        result.innerText=score;
        result.classList.remove('hide');
    }
}
restartBtn.onclick=function(){
    start();
    result.classList.add('hide');
}
start();
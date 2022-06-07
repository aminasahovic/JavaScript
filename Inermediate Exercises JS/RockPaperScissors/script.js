
// <!--
// ** JS2 - 3. Predavanje - Objects I - Domaća zadaća - Zadatak 1 **
// Deklarirati prazan objekt "osoba". Zatražiti od korisnika unos vrijednosti za sljedeća 3
// svojstva objekta: jmbg, ime i prezime.
// Napisati funkciju koja vrši provjeru za ime i prezime - ne smiju biti kraći od 3 znaka i ne smiju sadržavati 
// brojeve te funkciju za JMBG - ne smije sadržavati ništa osim brojeva i mora imati točno 13 brojeva.
// Ukoliko provjera nije prošla, funkcija treba ispisati poruku greške i vratiti 0, ukoliko je 
// provjera prošla, funkcija vraća 1.
// Zatražiti od korisnika unos navedenih vrijednosti. Nakon svakog unosa pozvati odgovarajuću funkciju za provjeru
// i tek ako je provjera prošla, tada treba dodijeliti unesene vrijednosti svojstvima objekta.
// -->
var osoba={};
function provjeriString(s){
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            return false;
        }
    }
    return true;
 }

 function provjeriBroj(b){
    for(let i=0;i<b.length;i++){
        if(isNaN(b[i])){
            return false;
        }
    }
    return true;
}

console.log(provjeriBroj("a"));
let varijabla=provjeriString("Amina");
 console.log(varijabla);

function provjeraImePrezime(rijec){
    if(rijec.length>=3 && provjeriString(rijec) ){
        return true;
    }
    return false
}
function provjeraJmbg(jmbg){
    if(jmbg.length==13 && provjeriBroj(jmbg)){
        return true;
    }
    return false;
    
}

function UnosPodataka(ime,prezime,jmbg){
    do{
        ime=prompt("Unesite ime");
    }while(!provjeraImePrezime(ime));
    osoba.ime=ime;
    do{
        prezime=prompt("Unesite prezime");
    }while(!provjeraImePrezime(prezime));
    osoba.prezime=prezime;
    do{
        jmbg=prompt("Unesite jmbg");

    }while(!provjeraJmbg(jmbg));
    osoba.jmbg=jmbg;
}

var ime,prezime,jmbg;

UnosPodataka(ime,prezime,jmbg);
console.log(osoba);

let rodneCislo= document.querySelector("input[name=rodneCislo]").value;
let rok=parseInt(rodneCislo.substr(0,2));
let mesic=parseInt(rodneCislo.substr(2,2));
let den=parseInt(rodneCislo.substr(4,2));

console.log(rok);
console.log(mesic);
console.log(den);
console.log(rodneCislo.length)

function overRC(){
    //Kontrola mesice
if (!(mesic>=1 && mesic<=12 || mesic>=51&&mesic<=62)) {
    document.querySelector('.vysledek').innerHTML="Nebylo vloženo rodné číslo. Zřejmě jsi zadal/a špatně měsíc narození";
    } 
    //kontrola dnu
    else if(!(den>=1 && den<=31))
    {document.querySelector('.vysledek').innerHTML="Nebylo vloženo rodné číslo. asi jsi zadal/a špatně den narození.";    
    }
    //kontrola roku narozeni
    else if (rok < 54 && rodneCislo.length<=9){
        document.querySelector('.vysledek').innerHTML="Může se jednat o rodné číslo člověka narozeného před rokum 1954";
    }
    else if (rodneCislo.length!==10) {
        document.querySelector('.vysledek').innerHTML="Nebylo vloženo rodné číslo. Asi jsi vynechal/a jednu číslici";

    }
    //kontrola delitelnosti
    else if (rodneCislo % 11 !== 0) {
        document.querySelector('.vysledek').innerHTML="Nebylo vloženo rodné číslo.";
    }
    else {
        document.querySelector('.vysledek').innerHTML="Bylo vloženo rodné číslo.";
        }
}
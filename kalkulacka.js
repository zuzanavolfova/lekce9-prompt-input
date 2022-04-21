function vypocet(){
    let cislo1 = document.querySelector("input[name=cislo1]").value;
    let cislo2 = document.querySelector("input[name=cislo2]").value;
    
    let vysledek;

    cislo1=parseInt(cislo1);
    cislo2=parseInt(cislo2);
    
    znamenko = document.querySelector("select").value;
    
    if (znamenko === "+"){
        vysledek=cislo1+cislo2;
        document.querySelector('.vysledek').innerHTML='Vysledek je: ' + vysledek;
        } else if (znamenko === "-"){
        vysledek=cislo1-cislo2;
        document.querySelector('.vysledek').innerHTML='Vysledek je: ' + vysledek;
        } else if (znamenko === "*"){
        vysledek=cislo1*cislo2;
        document.querySelector('.vysledek').innerHTML='Vysledek je: ' + vysledek;
        } else {
        vysledek=cislo1/cislo2;
        document.querySelector('.vysledek').innerHTML='Vysledek je: ' + vysledek;
    }

}

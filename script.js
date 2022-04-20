function zadejRozmery(){
    let sirka=parseInt(prompt('Zadej šířku pračky'));
    let vyska=parseInt(prompt('Zadej výšku pračky'));
    let hloubka=parseInt(prompt('Zadej hloubku pračky'));
    
    if (sirka < 62 && vyska<70 && hloubka<80){
        document.querySelector('.vysledek').innerHTML='Pračka se vejde';
        }else {
            document.querySelector('.vysledek').innerHTML='Kup jinou';
        }
}



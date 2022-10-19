
function ticketPrice(){
    let valueKmToGo = document.getElementById('inputKmToGo').value;
    document.getElementById('price').innerHTML = `il prezzo del tuo biglietto è : ${ valueKmToGo * 0.21 } &#8364`
    
    let valueAge = document.getElementById('inputAge').value;
    if( valueAge<18 ){
        
    }

}
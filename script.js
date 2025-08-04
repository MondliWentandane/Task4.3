document.getElementById("card1").style.display = "block";

function displayCard(cardID){

    for(let card of document.getElementsByClassName("card")){
        card.style.display = "none";
    }
    
    document.getElementById(cardID).style.display = "block";

}

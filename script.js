let allImagesCards = document.querySelectorAll(".card");


for (let imageCard of allImagesCards) {


    let favorittButton = imageCard.querySelector("button");


favorittButton.addEventListener("click", () => { 
    toggleFav(imageCard);


} );
    
}
/**
 * 
 * @param {Element} card 
 */

function toggleFav(card) {
    // Hent ut bilde fra HTML
    let image = card.querySelector("img");

//Lag bilde objectet 

    let imageObject = {
        url: image.src,
        name: image.alt, 
    }
let favoritt = loadFavoritter(); 

favoritt.push(imageObject);

//Lagre den oppdaterte listen u locol storage
let updatedFavorittString = JSON.stringify(favoritt);

localStorage.setItem("favoritt", updatedFavorittString);



}

function loadFavoritter() {

    let favorittString = localStorage.getItem("favoritt");

    let favoritt;

    if (favorittString === null) {

        favoritt = [];
    } else {

    //Hvis vi har vært her før, konventer tekst streng til array (liste)
        favoritt = JSON.parse(favorittString);
    }

    return favoritt;
}
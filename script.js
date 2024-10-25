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
    console.log(card);
    // Hent ut bilde fra HTML
    let image = card.querySelector("img");

//Lag bilde objectet 

    let imageObject = {
        url: image.src,
        name: image.alt, 
    }

    console.log(imageObject);
}

let allImagesCards = document.querySelectorAll(".card");


for (let imageCard of allImagesCards) {


    let favorittButton = imageCard.querySelector("button");


favorittButton.addEventListener("click", () => { 
    toggleFav(imageCard);


} );
    
}


function toggleFav(card) {
    console.log(card);
}

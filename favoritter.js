let favoritt = loadFavoritter();
let favorittList = document.querySelector("#favoritt"); 

for (let image of favoritt) {
console.log(image); 

let imageCard = document.createElement("li");
imageCard.textContent = image.name;

console.log(imageCard);

favorittList.append(imageCard);

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
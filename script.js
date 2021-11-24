var islandNameText = document.getElementById('islandName');
var islandCoordsText = document.getElementById('islandCoords');
var islands = document.querySelectorAll(".island");

var items = document.querySelectorAll(".itemIcon")


islands.forEach(element => {
    element.addEventListener("mouseover", function(){
        islandNameText.innerHTML = element.dataset.islandname;
        islandCoordsText.innerHTML = element.dataset.islandcoords;
    })
    element.addEventListener("click", function(){
        this.classList.toggle("islandZoom");
    })
});

items.forEach(element => {
    element.addEventListener("click", function(){
        this.classList.toggle("itemSelected");
    })
});
var islandNameText = document.getElementById('islandName');
var islandCoordsText = document.getElementById('islandCoords');
var islands = document.querySelectorAll(".island");

var items = document.querySelectorAll(".itemIcon");
var pearls = [...document.querySelectorAll(".pearl")];

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
        if(pearls.every(checkActiveState) === true){
            appearTowerOfGods();
        }
            else{
                disappearTowerOfGods();
            };
    })
});

function checkActiveState(el){
    return el.classList.contains("itemSelected");
}

function appearTowerOfGods(){
    document.getElementById('tog').style.opacity = "100";
}

function disappearTowerOfGods(){
    document.getElementById('tog').style.opacity = "0" 
}

"use strict";
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const names = [
    "Autohaven - Azarov's Resting Place",
    "Autohaven - Blood Lodge",
    "Autohaven - Gas Heaven",
    "Autohaven - Wrecker's Yard",
    "Autohaven - Wretched Shop",
    "Backwater - Grim Pantry",
    "Backwater - The Pale Rose",
    "Borgo - The Shattered Square",
    "Coldwind - Rancid Abattoir",
    "Coldwind - Torment Creek",
    "Crotus - Disturbed Ward",
    "Crotus - Father Campbell's Chapel",
    "Forsaken Boneyard - Eyrie of Crows NEW",
    "Fractured Cowshed",
    "Gideon - The  Game",
    "Glenvale - Dead Dawg Saloon",
    "Haddonfield - Lampkin Lane",
    "Lery's - Treatment Theatre",
    "MacMillan - Coal Tower",
    "MacMillan - Groaning Storehouse",
    "MacMillan - Ironworks of Misery",
    "MacMillan - Shelter Woods",
    "MacMillan - Suffocation Pit",
    "Ormond - Mount Ormond Resort",
    "Raccon  City - RPD Bottom Floor East Wing",
    "Raccon  City - RPD Bottom Floor West Wing",
    "Raccon  City - RPD Top Floor East Wing",
    "Raccon  City - RPD Top Floor West Wing",
    "Red Forest - Mother's Dwelling",
    "Red Forest - Temple of Purgation",
    "Rotten Fields",
    "Silent  Hill - Midwich",
    "Springwood - Badham Preschool 1",
    "Springwood - Badham Preschool 2",
    "Springwood - Badham Preschool 3",
    "Springwood - Badham Preschool 4",
    "Springwood - Badham Preschool 5",
    "Thompson House",
    "Withered Isle - Garden of Joy",
    "Yamaoka - Family Residence",
    "Yamaoka - Sanctum of Wrath"
];
function myFunction() {
    var _a;
    (_a = document.getElementById("myDropdown")) === null || _a === void 0 ? void 0 : _a.classList.toggle("show");
}
function filterFunction() {
    let input, filter, ul, li, i;
    input = document.getElementById("myInput");
    console.log(input.value);
    let div = document.getElementById("myDropdown");
    let aList = div.getElementsByTagName("a");
    if (input.value == "") {
        for (i = 0; i < aList.length; i++) {
            aList[i].style.display = "none";
        }
        return;
    }
    filter = input === null || input === void 0 ? void 0 : input.value.toUpperCase();
    let viewableCounter = 0;
    let lastViewable = "";
    for (i = 0; i < aList.length; i++) {
        let txtValue = aList[i].textContent || aList[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            aList[i].style.display = "";
            lastViewable = txtValue;
            viewableCounter++;
        }
        else {
            aList[i].style.display = "none";
        }
    }
    if (viewableCounter == 1) {
        view(lastViewable);
    }
}
const viewDiv = document.getElementById("view");
function view(name) {
    let imageElement = document.createElement("img");
    imageElement.src = `/image/${name}.jpg`;
    viewDiv.innerHTML = "";
    viewDiv.appendChild(imageElement);
}
const myDropdown = document.getElementById("myDropdown");
for (const n of names) {
    let anchorElement = document.createElement("a");
    anchorElement.onclick = () => view(n);
    anchorElement.innerHTML = n;
    myDropdown === null || myDropdown === void 0 ? void 0 : myDropdown.appendChild(anchorElement);
}
filterFunction();

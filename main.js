let cauldron = {
    herbs: 0,
    berries: 0,
    mushrooms: 0,
    water: 0,
    flowers: 0
};

let potionCount = 0; // Teller antall vellykkede trylledrikker
let currentRecipe = 'healing'; // Standard oppskrift

// Definerer oppskrifter for ulike trylledrikker
const recipes = {
    healing: { herbs: 2, berries: 1, mushrooms: 1 },
    energy: { herbs: 1, water: 2, flowers: 1 }
};

// Funksjon for å legge til ingredienser i kjelen
function addIngredient(ingredient) {
    if (cauldron.hasOwnProperty(ingredient)) { // Sjekker om ingrediensen er gyldig
        cauldron[ingredient]++;
        console.log(`Added 1 ${ingredient} to the cauldron.`);
    } else {
        console.log("Invalid ingredient!");
    }
}

// Funksjon for å sjekke om trylledrikken er korrekt
function checkPotion() {
    console.log("Cauldron contains:");
    for (let ingredient in cauldron) {
        console.log(`${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}: ${cauldron[ingredient]}`);
    }
    
    if (isPotionCorrect()) { // Sjekker om ingrediensene matcher oppskriften
        potionCount++;
        console.log(`Congratulations! You've brewed a perfect ${currentRecipe} potion!`);
        console.log(`Total successful potions: ${potionCount}`);
        
        // Oppdaterer HTML-visningen av antall vellykkede trylledrikker
        document.getElementById("potion-count").textContent = potionCount;
        
        resetCauldron(); // Tømmer kjelen for neste brygg
    } else {
        console.log("The potion failed! Try again.");
    }
}

// Funksjon for å sjekke om ingrediensene stemmer overens med den gjeldende oppskriften
function isPotionCorrect() {
    let recipe = recipes[currentRecipe];
    for (let key in recipe) {
        if (cauldron[key] !== recipe[key]) {
            return false;
        }
    }
    return true;
}

// Funksjon for å tømme kjelen og starte på nytt
function resetCauldron() {
    for (let key in cauldron) {
        cauldron[key] = 0;
    }
    console.log("Cauldron has been emptied.");
}

// Funksjon for å bytte til en annen oppskrift
function switchPotion(type) {
    if (recipes.hasOwnProperty(type)) { // Sjekker om oppskriften finnes
        currentRecipe = type;
        console.log(`Switched to brewing a ${type} potion.`);
        resetCauldron(); // Tømmer kjelen ved bytte av oppskrift
    } else {
        console.log("Invalid potion type!");
    }
}

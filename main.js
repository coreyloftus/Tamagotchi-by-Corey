const pet = {
    name:'',
    age: 0,
    status:{
        present:false,
        hunger: 0,
        sleeperton: 0,
        boredom: 0,
    }, birthPet() {
        pet.name = prompt(`Please name your pet:`)
        petNameText.innerHTML = pet.name;
        pet.hunger = 0
        pet.sleeperton = 0
        pet.boredom = 0
        pet.present=true
        pet.age = 0
        petAgeText.innerHTML = pet.age
        petAgeCounter()
        petNeeds()
    },
    }

// getters & setters

    // name and its area on the page
    let petNameText = document.querySelector(".petName")

    // pet age counter and its spot on the page
    let petAgeText = document.querySelector('.petAge')

    // Hungry status and its button
    let petHungerText = document.querySelector('.petHunger')
    petHungerText.innerHTML = pet.status.hunger
    let feedButton = document.querySelector('.feed-button');

    // Sleepy status and its button
    let petSleepertonText = document.querySelector(".petSleeperton")
    petSleepertonText.innerHTML = pet.status.sleeperton
    let lightsButton = document.querySelector(".lights-button")

    // Boredom Status and its button
    let petBoredomText = document.querySelector(".petBoredom")
    petBoredomText.innerHTML = pet.status.boredom
    let playButton = document.querySelector(".play-button")
    
    // Start Button getter
    let startButton = document.querySelector(".start-button")
    let resetButton = document.querySelector(".reset-button")

// #################################
// testing functions
// REMOVE for final release
    // Plus button getters
let playPlusButton = document.querySelector(".play-plus-button")
playPlusButton.addEventListener("click",boredomPlusOne)

function boredomPlusOne() {
if (pet.status.boredom !== 10){
    pet.status.boredom++
petBoredomText.innerHTML=pet.status.boredom
}
checkPetStatus()
}

let lightPlusButton = document.querySelector(".lights-plus-button")
lightPlusButton.addEventListener("click",sleepertonPlusOne)

function sleepertonPlusOne() {
    if (pet.status.sleeperton !== 10){
pet.status.sleeperton++
petSleepertonText.innerHTML=pet.status.sleeperton
} checkPetStatus()
}

let feedPlusButton = document.querySelector(".feed-plus-button")
feedPlusButton.addEventListener("click",hungerPlusOne)

function hungerPlusOne() {
if (pet.status.hunger !== 10) {
    pet.status.hunger++
petHungerText.innerHTML=pet.status.hunger
} checkPetStatus()
}
    
// ###################################
// Button Event Listeners

startButton.addEventListener("click",startGame)
resetButton.addEventListener("click",stopTimer)

let petNeeds = setInterval(() => {boredomPlusOne(), hungerPlusOne(), sleepertonPlusOne()}, 3000)
let petAgeCounter = setInterval(() => {petAgeCount()},1000)

function startGame() {
    pet.birthPet()
    startButton.disabled = true;
}
function stopTimer() {
clearInterval(petAgeCounter)
clearInterval(petNeeds)
startButton.disabled=false;
}


function petAgeCount(){
pet.age++
petAgeText.innerHTML = pet.age
}

// startTimer.addEventListener("click", function () {
//     interval = setInterval(() => {
//       count += 1;
//       updateTicks(count); 

feedButton.addEventListener("click",decreaseHunger)
function decreaseHunger() {
    if (pet.status.hunger === 0) {
        buttonTimeout()
    } else {
        pet.status.hunger--
        petHungerText.innerHTML= pet.status.hunger}
        checkPetStatus()
    }
    
    lightsButton.addEventListener("click",decreaseSleep)
    function decreaseSleep() {
        if (pet.status.sleeperton === 0) {
            buttonTimeout()
        } else {
            pet.status.sleeperton--
            petSleepertonText.innerHTML = pet.status.sleeperton
        } checkPetStatus()
    }
        
        playButton.addEventListener("click",decreaseBoredom)
        function decreaseBoredom() {
            if (pet.status.boredom === 0) {
                buttonTimeout()
            } else {
                pet.status.boredom--
                petBoredomText.innerHTML = pet.status.boredom
            } checkPetStatus()
        }


// ###################################
// FUNCTIONS that need to be written

function checkPetStatus(){
if (pet.status.boredom === 10) {
    gameOver()
} else if (pet.status.hunger === 10) {
    gameOver()
} else if (pet.status.sleeperton === 10 ) {
    gameOver()
}
}
function gameOver() {
    if (pet.status.boredom === 10) {
    pet.status.present = false
    petStatusBox.innerHTML = `pet has peaced out to the movies`
}
else if (pet.status.hunger === 10) {
    pet.status.present = false
    petStatusBox.innerHTML = `pet went for thai food`
    gameOver
} else if (pet.status.sleeperton === 10 ) {
    pet.status.present = false
    petStatusBox.innerHTML = `pet got le tired`
    gameOver
}
}

function buttonTimeout(){
    console.log(`function ${buttonTimeout} is not written yet`)
}
function resetHunger() {
    console.log(`function ${resetHunger} is not written yet`)
}
function resetBoredom() {
    console.log(`function ${resetBoredom} is not written yet`)
}
function resetLights() {
    console.log(`function ${resetLights} is not written yet`)
}
function birthPet() {
    console.log(`function ${birthPet} is not written yet`)
}

// ###################################

// Pet Object status and space
let petStatusBox = document.querySelector(".pet-status-box")
petStatusBox.innerHTML = pet.status.present


// gameStart(){ 
// name pet - get from user
// start timer
// }

                
                // STRETCH FUNCTIONS
    // evolvePet()
    // if petAge === 30 seconds...
    // grow petBodySize to big
    // if petAge === 60 seconds...
    // grow petBodySize to bigger
    // if petAge === 90 seconds...
    // grow petBodySize to biggest
    // if petBodySize === biggest, all meters increase much faster

// die conditions
// if (petHunger === 10) || (petSleeperton === 10) || (petBoredman === 10) {
// gameOver();
// }

// gameOver() {
    // hide pet object
    // reset timer
    // replace with GAME OVER text
    // create "Play again?" button
// }


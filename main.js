const pet = {
    name:'',
    age: 0,
    status:{
        present:false,
        hunger: 0,
        sleeperton: 0,
        boredom: 0,
    }, birthPet() {
        pet.hunger = 0
        pet.sleeperton = 0
        pet.boredom = 0
        pet.name = prompt(`Please name your pet:`)
        petNameText.innerHTML = pet.name;
        pet.status.present=true
        petStatusBox.innerHTML = pet.status.present
        pet.age = 0
        petAgeText.innerHTML = pet.age
        petAgeCounter
        petNeeds
    },
    }

//  timers, game start and end functions

let petNeeds = setInterval(() => {boredomPlusOne(), hungerPlusOne(), sleepertonPlusOne()}, 3000)
let petAgeCounter = setInterval(() => {petAgeCount()},1000)

function startGame() {
    pet.birthPet()
    startButton.disabled = true;
}
function stopTimer() {
clearInterval(petAgeCounter)
clearInterval(petNeeds)
resetButton.disabled=true;
startButton.disabled=false;
}

function petAgeCount(){
pet.age++
petAgeText.innerHTML = pet.age
}

function gameOver() {
    if (pet.status.boredom === 10) {
        pet.status.present = false
        petStatusBox.innerHTML = `pet has peaced out to the movies`
        stopTimer()
    }
    else if (pet.status.hunger === 10) {
        pet.status.present = false
        petStatusBox.innerHTML = `pet went for thai food`
        stopTimer()
    } else if (pet.status.sleeperton === 10 ) {
        pet.status.present = false
        petStatusBox.innerHTML = `pet got le tired`
        stopTimer()
    }
}

// getters & setters

    // name and its area on the page
    let petNameText = document.querySelector(".petName")

    // pet age counter and its spot on the page
    let petAgeText = document.querySelector('.petAge')

    // Hungry status and its button
    let petHungerText = document.querySelector('#petHunger')
    petHungerText.innerHTML = pet.status.hunger
    // bar meter
    let petHungerBar = document.querySelector('#pet-hunger-bar')
    let feedButton = document.querySelector('.feed-button');

    // Sleepy status and its button
    let petSleepertonText = document.querySelector("#petSleeperton")
    petSleepertonText.innerHTML = pet.status.sleeperton
    // bar meter
    let petSleepertonBar = document.querySelector('#pet-sleeperton-bar')
    let lightsButton = document.querySelector(".lights-button")

    // Boredom Status and its button
    let petBoredomText = document.querySelector("#petBoredom")
    petBoredomText.innerHTML = pet.status.boredom
    // bar meter
    let petBoredomBar = document.querySelector('#pet-boredom-bar')
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
    playButton.disabled = false
    pet.status.boredom++
petBoredomText.innerHTML=pet.status.boredom
    // petBoredomBar
}checkPetStatus()
}

let lightPlusButton = document.querySelector(".lights-plus-button")
lightPlusButton.addEventListener("click",sleepertonPlusOne)

function sleepertonPlusOne() {
    if (pet.status.sleeperton !== 10){
        lightsButton.disabled = false
pet.status.sleeperton++
petSleepertonText.innerHTML=pet.status.sleeperton
} checkPetStatus()
}

let feedPlusButton = document.querySelector(".feed-plus-button")
feedPlusButton.addEventListener("click",hungerPlusOne)

function hungerPlusOne() {
    if (pet.status.hunger !== 10) {
    feedButton.disabled = false
        pet.status.hunger++
petHungerText.innerHTML=pet.status.hunger
} checkPetStatus()
}
    
// ###################################
// Button Event Listeners

startButton.addEventListener("click",startGame)
resetButton.addEventListener("click",stopTimer)


// Feed Button listener and logic
feedButton.addEventListener("click",decreaseHunger)
function decreaseHunger() {
    if (pet.status.hunger === 0) {
        feedButton.disabled = true
    } else {
        pet.status.hunger--
        // shortenNeedsBar(hunger)
        petHungerText.innerHTML = pet.status.hunger
        checkPetStatus()
    }}
    
    function shortenNeedsBar(needType) {
        let barWidthCalc = pet.status[needType] - (pet.status[needType] * 40)
        petBoredomBar.style.width = `${barWidthCalc}px`
    }
    function lengthenNeedsBar(needType) {
        let barWidthCalc = pet.status[needType] * 40
        petBoredomBar.style= `width:${barWidthCalc}px`
    }
    
    lightsButton.addEventListener("click",decreaseSleep)
    
    function decreaseSleep() {
        if (pet.status.sleeperton === 0) {
            lightsButton.disabled = true
        } else {
            pet.status.sleeperton--
            petSleepertonText.innerHTML = pet.status.sleeperton
        } checkPetStatus()
    }
        
        playButton.addEventListener("click",decreaseBoredom)
        function decreaseBoredom() {
            if (pet.status.boredom === 0) {
                playButton.disabled = true
            } else {
                pet.status.boredom--
                petBoredomText.innerHTML = pet.status.boredom
            } checkPetStatus()
        }

        function checkPetStatus(){
            if (pet.status.boredom ===0) {
                playButton.disabled = true;
            } else if (pet.status.hunger === 0) {
                feedButton.disabled=true;
            } else if (pet.status.sleeperton === 0) {
                lightsButton.disabled=true;
            }
            else if (pet.status.boredom === 10) {
                gameOver()
            } else if (pet.status.hunger === 10) {
                gameOver()
            } else if (pet.status.sleeperton === 10 ) {
                gameOver()
            }
        }
       
        
// ###################################
// FUNCTIONS that might need to be written

// needs Bars
// function move() {
//     const element = document.getElementById("myBar");   
//     let width = 0;
//     const id = setInterval(frame, 10);
//     function frame() {
//       if (width == 100) {
//         clearInterval(id);
//       } else {
//         width++; 
//         element.style.width = width + '%'; 
//       }
//     }
//   }


function resetHunger() {
    console.log(`function ${resetHunger} is not written yet`)
}
function resetBoredom() {
    console.log(`function ${resetBoredom} is not written yet`)
}
function resetLights() {
    console.log(`function ${resetLights} is not written yet`)
}

// ###################################

// Pet Object status and space
let petStatusBox = document.querySelector(".pet-status-box")
petStatusBox.innerHTML = pet.status.present


                
                // STRETCH FUNCTIONS
    // evolvePet()
    // if petAge === 30 seconds...
    // grow petBodySize to big
    // if petAge === 60 seconds...
    // grow petBodySize to bigger
    // if petAge === 90 seconds...
    // grow petBodySize to biggest
    // if petBodySize === biggest, all meters increase much faster
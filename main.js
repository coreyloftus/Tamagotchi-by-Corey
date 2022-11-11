// getters & setters

    // name and its area on the page
    let petName = 'Coco'
    let petNameText = document.querySelector(".petName")
    petNameText.innerHTML = petName;

    // pet age counter and its spot on the page
    let petAge = 999
    let petAgeText = document.querySelector('.petAge')
    petAgeText.innerHTML = petAge;

    // Hungry status and its button
    let petHunger = 10
    let petHungerText = document.querySelector('.petHunger')
    petHungerText.innerHTML = petHunger
    let feedButton = document.querySelector('.feed-button');

    // Sleepy status and its button
    let petSleeperton = 10
    let petSleepertonText = document.querySelector(".petSleeperton")
    petSleepertonText.innerHTML = petSleeperton
    let lightsButton = document.querySelector(".lights-button")

    // Boredom Status and its button
    let petBoredom = 10
    let petBoredomText = document.querySelector(".petBoredom")
    petBoredomText.innerHTML = petBoredom
    let playButton = document.querySelector(".play-button")
    
    // Start Button getter
    let startButton = document.querySelector(".start-button")
    
// ###################################
// Button Event Listeners

startButton.addEventListener("click",console.log(`start button clicked`))
function startGame() {
    resetHunger()
    resetBoredom()
    resetLights()
    birthPet()
    beginTimer()
    checkPetStatus()
}

feedButton.addEventListener("click",decreaseHunger)
function decreaseHunger() {
    if (petHunger === 0) {
        buttonTimeout()
    } else {
        petHunger--
        petHungerText.innerHTML= petHunger}
    }
    
    lightsButton.addEventListener("click",decreaseSleep)
    function decreaseSleep() {
        if (petSleeperton === 0) {
            buttonTimeout()
        } else {
            petSleeperton--
            petSleepertonText.innerHTML = petSleeperton
        }}
        
        playButton.addEventListener("click",decreaseBoredom)
        function decreaseBoredom() {
            if (petBoredom === 0) {
                buttonTimeout()
            } else {
                petBoredom--
                petBoredomText.innerHTML = petBoredom
            }}
            // ###################################
            // FUNCTIONS that need to be written
            
            function checkPetStatus(){
                console.log(`function ${checkPetStatus} is not written yet`)
                if (petBoredom === 10){
                    pet
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
function beginTimer() {
    console.log(`function ${beginTimer} is not written yet`)
}
            
// ###################################
            
            // Pet Avatar's status and space
            let petStatus = `alive`
            let petStatusBox = document.querySelector(".pet-status-box")
            petStatusBox.innerHTML = petStatus
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


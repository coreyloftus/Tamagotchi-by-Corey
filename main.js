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
let playButton = document.querySelector("play-button")

// Pet Avatar's status and space
let petAvatar = true
let petAvatarBox = document.querySelector(".pet-avatar-box")
petAvatarBox.innerHTML = petAvatar
// gameStart(){ 
    // name pet - get from user
    // start timer
// }

petHunger.addEventListener("click",decreaseHunger())
decreaseHunger() => {
    petHunger--;
}

// decreaseSleep()
// decreaseBoredom()

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


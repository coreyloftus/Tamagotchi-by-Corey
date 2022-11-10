TAMAGOTCHI
by Corey Loftus
Project 0
for General Assembly - SEI-1031-Cohort

########################################

## User Stories

## Architecture

- Create a Class (JS Class, look at your notes if your forget) for your tamagotchi

## GitHub

- Create a repo for your tamagotchi pet

## Actions
-- STRETCH --
- starting wizard / tips bar
- Click button to reveal all game buttons
- Click button to start game
  - starting game starts a timer
  - creates Tamagotchi data object
  - creates Tamagotchi GUI character
    - Display a character of your choice on the screen to represent your pet
      -- STRETCH -- Animate w/ images / CSS shapes / CSS animate property
    - AKA Instantiate your Tamagotchi
- Increase your pet's Age every x minutes
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
- You pet should die if Hunger, Boredom, or Sleepiness hits 10.
  - Hide Pet Object
  - Display "PET HAS LEFT FOR ANOTHER OWNER"
- Button to RESTART the game resets the counter and Pet object
  -- STRETCH --
- hidden button to increase ALL variables at once

## Style

- Provide **basic** style for the page.
- top border title

## Display

- User can name the pet via a text box.
- Text box becomes hidden after the Pet is named.

- Display the following metrics for your pet:
  - Hunger (1-10 scale)
  - Sleepiness (1-10 scale)
  - Boredom (1-10 scale)
  - Age

## Controls

- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
  -- STRETCH --
- DIV boxes for larger buttons that can be styled
- Keyboard shortcuts for each action (feed, lights, play)

STRETCH GOALS

- Animate your pet across the screen while it's alive. Check out using [jQuery](https://jquery.com/) to animate your pet with jQuery's [animate method](https://api.jquery.com/animate/).
- Morph your pet at certain ages.
- Have your tamagotchi give birth to baby tamagotchi...
- ...with special powers (extend the class)!
- Add an `exercise()` method to your tamagotchi, that affects certain properties
- Add anything you can think of... use your imagination!

# Tinder Bot

## Description
This script is a simple Tinder bot designed to automate the process of swiping left (dislike) or right (like) on user profiles. It uses random intervals between swipes to simulate a more human-like behavior and avoid detection.

## Usage
Before using the bot, make sure you are on the correct Tinder page. Open the browser console and paste the script. The bot will then start automatically swiping left or right at random intervals.

**Note:** Use this script responsibly and be aware of the terms of service of the platform you are interacting with. Automation scripts may violate the terms, and the use of such scripts can lead to account suspension or other penalties.

## Functions

### `getRandomBoolean()`
Generates a random boolean value (true or false) to determine whether to swipe left or right.

### `getButtonByBackgroundClass(backgroundClass)`
Finds and returns a button element with a specific background class on the Tinder page.

### `clickRandomButton()`
Clicks on a randomly selected button (like or dislike) using the `getRandomBoolean` function and the buttons' background classes.

### `executeWithRandomInterval()`
Executes the `clickRandomButton` function and sets a random interval (between 500ms and 1000ms) before calling itself again using `setTimeout`. This creates a loop with random intervals for continuous swiping.

## Error Handling
If the like and dislike buttons are not found on the page, an error message will be logged to the console, indicating that the buttons were not found. This is to ensure that the script is used on the correct page.

## Disclaimer
Use this script responsibly and in accordance with Tinder's terms of service. Automated interactions with Tinder or any other platform may violate terms and conditions, leading to consequences such as account suspension.

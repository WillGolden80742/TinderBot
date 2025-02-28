# Tinder Bot

## Description
This script is a simple Tinder bot designed to automate the process of swiping left (dislike) or right (like) on user profiles. It includes configurable settings to control the swiping behavior, such as time intervals, preferred tags, shuffle mode, and like probability.

## Usage
Before using the bot, make sure you are on the correct Tinder page. Open the browser console and paste the script. The bot will then start automatically swiping left or right based on the configured settings.

**Note:** Use this script responsibly and be aware of the terms of service of the platform you are interacting with. Automation scripts may violate the terms, and the use of such scripts can lead to account suspension or other penalties.

## Configuration
The bot includes the following configurable settings:

- **`preferredTags`**: An array of tags (e.g., `["Monogamia", "Algo casual"]`). Profiles containing these tags will receive a like; others will be disliked unless shuffle mode is enabled.
- **`shuffleMode`**: When enabled, the bot ignores `preferredTags` and makes random like/dislike decisions.
- **`likeProbability`**: A value between 0 and 100 that defines the probability of swiping right (like) when `shuffleMode` is enabled.
- **`timeRange`**: Defines the interval between swipes in seconds (e.g., `1` for 1 second, `0.5` for half a second, `2` for two seconds, etc.).

## Functions

### `getButtonByBackgroundClass(backgroundClass)`
Finds and returns a button element with a specific background class on the Tinder page.

### `isPreferredTagPresent()`
Checks if any of the preferred tags are present on the profile.

### `clickLikeIfPreferredOtherwiseDislike()`
Clicks the like button if a preferred tag is found; otherwise, clicks the dislike button. If `shuffleMode` is enabled, it follows the `likeProbability` setting to decide randomly.

### `executeWithRandomInterval()`
Executes the `clickLikeIfPreferredOtherwiseDislike` function at intervals defined by `timeRange`, ensuring a natural interaction pattern.

## Error Handling
If the like and dislike buttons are not found on the page, an error message will be logged to the console, indicating that the buttons were not found. This is to ensure that the script is used on the correct page.

## Disclaimer
Use this script responsibly and in accordance with Tinder's terms of service. Automated interactions with Tinder or any other platform may violate terms and conditions, leading to consequences such as account suspension.

# majj-extension
This is a Chrome extension of Majj, an app for finding gems on the web. 

# Instructions

- First, clone this repository.
- Next, ```cd``` into the repo and before proceeding, run ```npm install``` to install dependencies.
- Once complete, you can run ```npm start``` to view at ```localhost:3000```
- If you want to view as a Chrome extension as it's intended, from the root directory, run ```npm run build```. This will 
create an optimized production build that you can then add to your Chrome extensions in Developer Mode. Open Chrome and navigate to ```chrome://extensions```. In the top right corner of the window, toggle the "Developer mode" switch. You'll see 
some new options on the left hand side of the screen, you'll want to use "Load unpacked." When you click this button, Chrome wlil present you with a file explorer. Navigate to your majj-extension directory, select the "Build" folder, and click "Select folder." You'll now see Majj listed alongside your extensions - happy mining!
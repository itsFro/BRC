# Better Remote Control for Bondage Club

NOTE: This code is out of date and probably no longer works 

BRC is a script for Bondage Club that improves the UI for controlling toys in game.

## Installation

You can install with the following link [brcLoader.user.js](https://itsfro.github.io/BRC/brcLoader.user.js) if you have Tampermonkey, alternatively you can create a bookmark with the following : 

```js
javascript:(()=>{fetch('https://itsfro.github.io/BRC/brcLoader.user.js').then(r=>r.text()).then(r=>eval(r));})();
```

## Commands

*`/syncto (Member Number)`* - Syncs the controls to the member

*`/brc`* - list available commands in game.

*`/brc show`* - shows remote controls.

*`/brc hide`* - hides remote controls.

*`/brc remoteplay`* - Toggles remote play on and off - This will only function if both target and user have BRC

*`/brc publish (0 - 4)`* - What type of command to publish in chat room list below


* 0 - Discreet mode: Only you and target will see events
* 1 - Forced Discreet mode: This will override the target's publish settings to act discreet
* 2 - Normal mode: Acts like normal club events (will not announce remote play in chat). 
* 3 - Normal mode: Acts like normal club events (will announce remote play in chat). 
* 4 - Force announce: Acts like normal club events (will force target to announce remote play in chat).

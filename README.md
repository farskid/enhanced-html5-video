An enhanced html5 video element with extra accessibility tools. This is being done to respect common keybindings that users are accustomed to, and use them for better accessibility.

## Features:
* `Spacebar key` will toggle player state from playing to paused and vice versa.
* `Enter key` will toggle video fullscreen mode.
* `Click on Video` will toggle video playing state.
* `Double Click on Video` will toggle video fullscreen mode.

For more features to be added soon, check out _TODO_ part below.

## Usage
Nodejs: `npm install enhaced-html5-video`

Browser: Grab `video.js` from the repo.


```html
<div id="my-video">
  <video controls src="PATH_TO_VIDEO"></video>
</div>

<script src="/video.js"></script>
<script>
  enhancedHTML5Video.init({
    id: 'my-video',
    keys: {
      doubleClick: true, // Default: true
      click: true, // Default: true
      enter: true, // Default: true
      spacebar: true // Default: true
    }
  })
</script>
```

## Development
clone repo: `git clone https://github.com/farskid/enhanced-html5-video.git`

install development packages: `yarn`

run local server: `yarn start`. Will start a local server on __localhost:4000__

__Happy Development!__

## TODO
* Add cover image to video
* Key Bindings:
  * ~~Enter: toggle fullscreen~~
  * ~~doubleClick: toggle fullscreen~~
  * ~~click on whole video canvas: toggle playing state~~

Credit: _Farzad YZ_ <farskid@gmail.com>

MIT Licensed.

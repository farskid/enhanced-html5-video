
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
    id: 'my-video'
  })
</script>
```

## Development
clone repo: `git clone https://github.com/farskid/enhanced-html5-video.git`
install development packages: `yarn`
run local server: `yarn start`. Will start a local server on __localhost:4000__

Happy Development!

MIT Licensed. Credit to _Farzad YZ_<farskid@gmail.com>

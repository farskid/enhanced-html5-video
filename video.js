var enhancedHTML5Video = (function () {

  function queryElements(id) {
    var container = document.getElementById(id)
    return {
      video: container.querySelector('video'),
      container: container
    }
  }

  return {
    init: function (config) {

      if (!config.id) throw Error('enhancedHTML5Video requires a valid id for the video')

      document.addEventListener('keydown', function (e) {
        switch (e.which) {
          case 32:
            var videoElem = queryElements(config.id).video
            if (videoElem.paused) videoElem.play()
            else videoElem.pause()
        }
      })
    }
  }
})()

window.enhancedHTML5Video = (function () {

  // Immutable Extend
  function _extend(source, target) {

    // Pass source to result by value
    var result = JSON.parse(JSON.stringify(source))

    // Return the source object when there is no `target` provided
    if (!target) return source

    // Extend logic: by here, the result has at least source's keys and values
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = !target.hasOwnProperty(key) ? source[key] : target[key]
      }
    }

    return result
  }

  function queryElements(id) {
    var container = document.getElementById(id)
    return {
      video: container.querySelector('video'),
      container: container
    }
  }

  function togglePlayingState(video) {
    if (video.paused) video.play()
    else video.pause()
  }

  function toggleFullScreen(video) {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // Video should enter fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    else {
      // Video should exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  return {
    init: function (config) {

      if (!config.id) throw Error('enhancedHTML5Video requires a valid id for the video')

      // Extend default key bindings with `config.keys`
      var keys = _extend({
        doubleClick: true,
        click: true,
        enter: true,
        spacebar: true
      }, config.keys)

      // Video Element
      var videoElem = queryElements(config.id).video

      // Control Bindings
      // Double Click: Toggle Fullscreen
      keys.doubleClick && videoElem.addEventListener('dblclick', function (e) {
        toggleFullScreen(videoElem)
      })
      // Single Click: Toggle Playing State
      keys.click && videoElem.addEventListener('click', function (e) {
        togglePlayingState(videoElem)
      })

      // Keys
      document.addEventListener('keydown', function (e) {
        switch (e.which) {
          // Spacebar: Toggle Playing State
          case 32:
            keys.spacebar && togglePlayingState(videoElem)
            break
          // Enter: Toggle Fullscreen
          case 13:
            keys.enter && toggleFullScreen(videoElem)
            break
        }
      })
    }
  }
})()

window.enhancedHTML5Video = (function () {

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

      var videoElem = queryElements(config.id).video

      videoElem.addEventListener('dblclick', function (e) {
        toggleFullScreen(videoElem)
      })

      videoElem.addEventListener('click', function (e) {
        togglePlayingState(videoElem)
      })

      document.addEventListener('keydown', function (e) {
        switch (e.which) {
          case 32:
            togglePlayingState(videoElem)
          case 13:
            toggleFullScreen(videoElem)
        }
      })
    }
  }
})()

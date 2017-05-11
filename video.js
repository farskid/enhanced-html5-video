var enhancedHTML5Video = (function () {

  function queryElements(id) {
    var container = document.getElementById(id)
    return {
      video: container.querySelector('video'),
      container: container
    }
  }

  function imageFactory(src, attrs) {
    var img = new Image()

    for (var prop in attrs) {
      img[prop] = attrs[prop]
    }

    img.src = src

    return img
  }

  function setElementsStyles(elements) {
    elements.container.style.position = 'relative'

    elements.cover.style.position = 'absolute'
    elements.cover.style.top = '0px'
    elements.cover.style.left = '0px'
  }

  return {
    init: function (config) {

      if (!config.id) throw Error('enhancedHTML5Video requires a valid id for the video')

      if (config.cover) {
        var elements = queryElements(config.id)
        var video = elements.video,
          container = elements.container,
          img

        video.addEventListener('loadedmetadata', function () {
          img = imageFactory(video.getAttribute('data-cover'), {
            width: video.videoWidth,
            height: video.videoHeight
          })

          container.appendChild(img)
          setElementsStyles({
            container: container,
            cover: img
          })
        })

      }

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

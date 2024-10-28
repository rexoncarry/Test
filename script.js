jQuery(function () {

// Youtube player
window.videoPlayer;

window.onYouTubeIframeAPIReady = function () {
 var videoPlayerId = $('#videoPlayer').attr('data-videoid');
 window.videoPlayer = new YT.Player('videoPlayer', {
  height: '1080',
  width: '1920',
  videoId: videoPlayerId,
  playerVars: {
   'controls': 0,
   'autoplay': 1,
   'mute': 1,
   'loop': 1,
   'showinfo': 0,
   'modestbranding': 1
  },
  events: {
   'onReady': onVideoPlayerReady,
   'onStateChange': onVideoPlayerReady
  }
 });
}

function onVideoPlayerReady(event) {
 videoPlayer.playVideo();
}
});
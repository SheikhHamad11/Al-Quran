// $(document).ready(function() {
//     $('#headerVideoLink').magnificPopup({
//       type:'inline',
//       midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
//     });
//   });

const audio = document.getElementById("audio");
const toggleMuteButton = document.getElementById("toggleMute");

// Function to toggle mute/unmute
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    toggleMuteButton.innerHTML =
      '<i class="bi bi-volume-up text-secondary"></i>';
  } else {
    audio.muted = true;
    toggleMuteButton.innerHTML =
      '<i class="bi bi-volume-mute text-secondary"></i>';
  }
}

// Add event listener to the button
toggleMuteButton.addEventListener("click", toggleMute);

// Function to handle visibility change
function handleVisibilityChange() {
  if (document.hidden) {
    // Page is hidden, pause the audio
    audio.pause();
  } else {
    // Page is visible, play the audio if it was playing before
    audio.play();
  }
}

// Add event listener for page visibility change
document.addEventListener("visibilitychange", handleVisibilityChange);

document.getElementById("open-button").addEventListener("click", function () {
  document.querySelector(".video-popup").style.display = "flex";
});

document.getElementById("close-button").addEventListener("click", function () {
  document.querySelector(".video-popup").style.display = "none";
  // Stop the video by setting the src attribute to an empty string
  document.getElementById("video-frame").src = "";
});

$(document).ready(function () {
  $(".popup-link").click(function (event) {
    event.preventDefault();
    var videoUrl = $(this).data("video");
    $("#videoModal iframe").attr("src", videoUrl);
    $("#videoModal").modal("show");
  });

  $("#videoModal").on("hidden.bs.modal", function () {
    $("#videoModal iframe").attr("src", "");
  });
});

var a = 5;
var b = 4;
if ((a = b)) {
  console.log("a is equal to b");
}

function Course(title, name, value) {
  this.title = title;
  this.name = name;
  this.value = value;
}
var Course1 = new Course("hamad", "hamad", "hamad");
var Course12 = new Course("hamad", "hamza", "hassan");
console.log(Course1, Course12);

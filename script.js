// const audio = document.getElementById("audio");
// const toggleMuteButton = document.getElementById("toggleMute");

// // Function to toggle mute/unmute
// function toggleMute() {
//   if (audio.muted) {
//     audio.muted = false;
//     toggleMuteButton.innerHTML =
//       '<i class="bi bi-volume-up text-secondary"></i>';
//   } else {
//     audio.muted = true;
//     toggleMuteButton.innerHTML =
//       '<i class="bi bi-volume-mute text-secondary"></i>';
//   }
// }

// // Add event listener to the button
// toggleMuteButton.addEventListener("click", toggleMute);

// // Function to handle visibility change
// function handleVisibilityChange() {
//   if (document.hidden) {
//     // Page is hidden, pause the audio
//     audio.pause();
//   } else {
//     // Page is visible, play the audio if it was playing before
//     audio.play();
//   }
// }
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".fade-in-text");
  var screenPosition = window.innerHeight / 1.3;

  elements.forEach(function (element) {
    var elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    }
  });
});

window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(
    ".typing-element h1, .typing-element p, .typing-element h3"
  );
  var screenPosition = window.innerHeight / 1.3;

  elements.forEach(function (element) {
    var elementPosition = element.getBoundingClientRect().top;

    if (
      elementPosition < screenPosition &&
      !element.classList.contains("typed")
    ) {
      element.classList.add("typed");
    }
  });
});

// Import Member Icons HTML
$("#icons").load("icons.html");

// Embeded video
var videoEmbed = document.getElementById("videoEmbed")

// Embed Video Change
function videoLink(a) {
  return videoEmbed.src = "https://www.youtube.com/embed/" + videoList[a] + "?rel=0&amp;showinfo=0"
}

// Open Link Function
function openLink(a, b) {
  if (confirm(a)) {
    window.open(b)
  }
}

// Copyright text
document.getElementById("notice").innerHTML = "DOCTOR WHO is owned by the BBC. MINECRAFT is owned by Mojang and Microsoft. CLUB PENGUIN is owned by Disney. DeCipher Creations is neither associated nor affiliated with any of the copyright owners. No copyright infringement intended."

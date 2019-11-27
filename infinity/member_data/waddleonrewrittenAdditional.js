// Page Data
document.getElementById("pageTitle").innerHTML = memberInfo["channelName"] + " | DeCipher Creations"
document.getElementById("channelName").innerHTML = memberInfo["channelName"]
document.getElementById("videoEmbed1").innerHTML = memberInfo["videoTitle1"]
document.getElementById("videoEmbed2").innerHTML = memberInfo["videoTitle2"]
document.getElementById("videoEmbed3").src = "https://www.youtube.com/embed/mPebX5ndSbM?rel=0&amp;showinfo=0"
document.getElementById("videoEmbed4").src = "https://www.youtube.com/embed/Qq-EKtejj1w?rel=0&amp;showinfo=0"
document.getElementById("aboutMemberTitle").innerHTML = "About " + memberInfo["channelName"]
document.getElementById("aboutMemberText").innerHTML = memberInfo["aboutMemberText1"] + " " + memberInfo["aboutMemberText2"]
document.getElementById("startDate").innerHTML = "The show ran from " + memberInfo["startDate"] + " to " + memberInfo["endDate"] + "."
document.getElementById("twitterAd").innerHTML = "Visit the " + memberInfo["channelName"] + " Twitter:"
document.getElementById("twitterLink").innerHTML = "@" + memberInfo["twitterUsername"]

// Background and Gallery images
document.body.style.backgroundImage = "url('img/background_" + memberInfo["fileSuffix"] + ".jpg')"

// Default embeded video (before a button is clicked)
document.getElementById("videoEmbed").src = "https://www.youtube.com/embed/" + videoList[0] + "?rel=0&amp;showinfo=0"

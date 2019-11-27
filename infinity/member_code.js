// Page Data
document.getElementById("pageTitle").innerHTML = memberInfo["channelName"] + " | DeCipher Creations"
document.getElementById("channelName").innerHTML = memberInfo["channelName"]
document.getElementById("videoEmbed1").innerHTML = memberInfo["videoTitle1"]
document.getElementById("videoEmbed2").innerHTML = memberInfo["videoTitle2"]
document.getElementById("aboutMemberTitle").innerHTML = "About " + memberInfo["channelName"]
document.getElementById("aboutMemberText").innerHTML = memberInfo["aboutMemberText1"] + "<br>" + memberInfo["aboutMemberText2"]
document.getElementById("startDate").innerHTML = "Creating since " + memberInfo["startDate"] + "."
document.getElementById("twitterAd").innerHTML = "Follow " + memberInfo["channelName"] + " on Twitter:"
document.getElementById("twitterLink").innerHTML = "@" + memberInfo["twitterUsername"]

// Background and Gallery images
document.body.style.backgroundImage = "url('img/background_" + memberInfo["fileSuffix"] + ".jpg')"
document.getElementById("image1").style.backgroundImage = "url('img/gallery_" + memberInfo["fileSuffix"] + "-1.jpg')"
document.getElementById("image2").style.backgroundImage = "url('img/gallery_" + memberInfo["fileSuffix"] + "-2.jpg')"

// Default embeded video (before a button is clicked)
document.getElementById("videoEmbed").src = "https://www.youtube.com/embed/" + videoList[0] + "?rel=0&amp;showinfo=0"

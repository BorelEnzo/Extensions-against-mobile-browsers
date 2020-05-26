function handleMessage(request, sender, sendResponse) {
  if (request.msg == "ok"){
    chrome.tabs.query({active:true}, function(tab){
        chrome.tabs.remove(tab[0].id)
      });
    }
}
chrome.runtime.onMessage.addListener(handleMessage);

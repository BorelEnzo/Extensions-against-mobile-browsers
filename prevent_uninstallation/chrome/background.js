function handleUpdated(tabId, changeInfo, tabInfo) {
  if (navigator.userAgent.includes("Chrome") && (tabInfo.url.startsWith("chrome://extensions") || tabInfo.url.startsWith("https://chrome.google.com/webstore/detail/"))) {
    try{
        chrome.tabs.remove(tabId);
    }
    catch{}
  }
}

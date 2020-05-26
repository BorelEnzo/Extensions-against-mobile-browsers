function handleUpdated(tabId, changeInfo, tabInfo) {
  if (navigator.userAgent.includes("Firefox") && (tabInfo.url == "about:addons" || tabInfo.url == "about:debugging" || tabInfo.url.startsWith("https://addons.mozilla.org/en-US/firefox/addon/"))) {
    try{
        chrome.tabs.remove(tabId);
    }
    catch{}
  }
}
chrome.tabs.onUpdated.addListener(handleUpdated);

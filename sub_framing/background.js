chrome.webRequest.onHeadersReceived.addListener((details) => {
  if (details){
    var index = 0;
    for (let i = 0; i < details.responseHeaders.length; i += 1) {
        if (details.responseHeaders[i].name == 'x-frame-options'){
            index = i;
            break
        }
    }
    details.responseHeaders[index] = details.responseHeaders[index+1];
    return {
        responseHeaders: details.responseHeaders,
    };
  }
  return details;
},
{urls: ['https://*.google.com/*']}, ['blocking', 'responseHeaders']);

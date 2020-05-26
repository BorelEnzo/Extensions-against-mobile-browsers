## Faking contextual menu

This attack abuses the fact that contextual menu on mobile could be quite easily impersonated with modal windows in pure HTML/CSS. Since the user doesn't have a mouse pointer, this event is replaced by a long click. On desktop, hovering a link element will show in the bottom left corner the target URL. But on mobile, such technique doesn't work, and one way to know where a link leads is to long press on it and display an informative window:

![modal](https://borelenzo.github.io/assets/res/thesis/modal_combined.png)

The rightmost screen capture is the result of this PoC when injected in Google's home page

The appearance of the modal depends on the browser, hence the check of the injected HTML in the content script

Still, CSS rules must surely be tweaked to fit your needs, because the injected `iframe` might still appear below some visual elements, depending on the website

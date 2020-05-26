## Ghost click

Ghost click is a known issue in Web development, though not necessary abused a security issue. If the device has a touch screen, document elements can be bound to a `ontouchstart` event, not working on goo old desktop computers. Specification states that:

>If the user agent dispatches both touch events and mouse events in response to a single user action, then the touchstart event type must be dispatched before any mouse event types for that action. [. . . ] If the user agent intreprets a sequence of touch events as a click, then it should dispatch mousemove, mousedown, mouseup, and click events (in that order) at the location of the touchend event for the corresponding touch input.  
>(sic)

It then means that if the browser follows the standard expectations, the events are fired in the following order:

1. `touchstart`: as soon as the user touches the screen
2. `touchmove`: as long as the user moves their finger, may bee inexistent if the user immediately releases their finger
3. `touchend`: last Touch Event, fired whenever the finger leaves the screen
4. `mousemove`, `mousedown`, `mouseup` and `click` in this order, if the touch event was interpreted as a click (in other words, if the user agent considers that there was no `touchmove` events)


Ghost click occurs when the the `click` event is fired but no function has been associated as callback. It might be without consequences, unless the `click` is caught by an unexpected element. The attack relies on the fact that tabs are overlapping on mobile, and that extensions can close arbitrary tabs, even the ones they didn't open themselves. Indeed, a normal unprivileged script cannot do so.

The principle is then to have two open tabs and the target on the one below. The content script of the extension in injected in the one of the top (according to manifest permissions), and warns the background script that a `touch` event occurred. As soon as the message is received, the background script closes the active tab, and the `click` will be caught by the underlying tab.

## Preventing from uninstallation

Whereas desktop browsers can be started from the command line in safe mode, it is less likely to do so on mobile. Hence, it makes easier for an extension to try to prevent from its removal, as long as the user doesn't clear application data or reinstall the browser.  
The technique used here is inspired by MalwareBytes Lab's article [https://blog.malwarebytes.com/threat-analysis/2018/01/new-chrome-and-firefox-extensions-block-their-removal-to-hijack-browsers/](https://blog.malwarebytes.com/threat-analysis/2018/01/new-chrome-and-firefox-extensions-block-their-removal-to-hijack-browsers/). The principle is to check if some specific tabs are open, and programmatically close them.

The URLs of these specific tab to check depends on the browser, hence the two subdirectories for Chrome-like and Firefox-like extensions


### Firefox-like extensions

The code should work also on desktop (unless it runs in safe mode). It looks for the following URLs:

* `about:addons`: the addons management page
* `about:debugging`: doesn't exist on mobile, does on desktop
* its page on AMO, because it could be uninstalled from here

The `browser_action` in the manifest in intentionally omitted, otherwise an icon appears in the address bar on desktop, allowing the user to right-click and remove

### Chrome-like extension

The attack doesn't work on desktop since an icon will always be displayed in the address bar, even if no `browser_action` is specified. It lets then the ability to the user to right-click and remove the extension.

The URLs it checks are then:
* `chrome://extensions*`: leading to the general management panel or to a specific extension's panel if the parameter `id` is passed in the URL. The URL `chrome://apps` is currently not supported on mobile. Another thing is that browser like Kiwi or Brave make use of an alias such as `kiwi://` or `brave://` for privileged URLs, but the one to check is still `chrome://` (for Kiwi at least) 

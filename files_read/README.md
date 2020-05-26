## Local file reader

This attack worked on Kiwi Browser, with the access to file granted (at the Adroid level for the browser itself, and for the extension).

The manifest must have as permissions at least the scheme `file:///*` and the address of the C&C server

The background script reads the content of a file (binary or textual) or the listing of a directory, and sends it to the C&C

More complete attack would therefore make use of websockets for example to make it more interactive

## Long URLs manipulation

Due to the reduced size of the screen, one sensible component of the browser is the address bar, which must always be congruent with the displayed content (even if some specific cases like AMP tend to bypass it).

In this example, whenever the user tries to log into their Github account, it will redirect with a similar login page but with specific parameters creating a relationship between the Github account and CTFtime account. It could also work with the "Sign-in with Google", to force the user to log into a arbitrary service when they only want to log into their Google account or to another service.

The content script first redirects to the URL expected by the attacker and then removes visible elements that could warn the user.

On a mobile device, it is really likely that only a small part of the URL shown, and that there are too much parameters to make the user suspicious

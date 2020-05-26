## Intent scheme abuse (Android)

On Android:
>An Intent is a messaging object you can use to request an action from another app component. Although intents facilitate communication between components in several ways, there are three fundamental use cases:  
* starting an activity
* starting a service
* Delivering a broadcast

from [https://developer.android.com/guide/components/intents-filters](https://developer.android.com/guide/components/intents-filters)

These intents can be expressed as URIs, built like this [https://developer.chrome.com/multidevice/android/intents](https://developer.chrome.com/multidevice/android/intents):

```
intent:  
   HOST/URI-path // Optional host  
   #Intent;  
      package=[string];  
      action=[string];  
      category=[string];  
      component=[string];  
      scheme=[string];  
   end;
```

It appears that these URIs are treated like regular one, meaning that a web page or an extension could send `Intent`s only by trying to resolve it. On Firefox, putting an intent URL as source immediately triggered it, but it was not the case for Kiwi. Besides this, a malformed intent URI made Fennec crash, so the bug has been reported, stressing on the potential harmfulness of such automatic resolution.

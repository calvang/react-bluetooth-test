# Bluetooth React Test

A proof-of concept for connecting bluetooth devices to a Javascript web application. Utilizes the Web Bluetooth API: https://webbluetoothcg.github.io/web-bluetooth/#permission-api-integration

## Demo

Try it out on CodeSandbox!
https://codesandbox.io/s/flamboyant-platform-5063k?file=/src/App.js

**Things to Note:**
- This only works on supported browsers: https://github.com/WebBluetoothCG/web-bluetooth/blob/master/implementation-status.md
- To enable bluetooth support in Chrome, go to `chrome://flags` in the address bar and enable the "Experimental Web Platform" feature.
- When running this in CodeSandbox, you may need to open the preview in a new window to access the bluetooth feature.
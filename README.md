1. Download and instal app on your Android:
   https://expo.dev/accounts/codan84/projects/google-auth-bug/builds/f8e75b6b-a766-4de6-9273-9e21898293cb
2. `npm install`
3. Login to expo via your cli
4. `npm start`
5. Open the app
6. Scan QR code and/or type in the URL
7. See the error when app loads

This is a very basic Expo app generated via `create-expo-app`.  
The only package added is `@react-native-google-signin/google-signin`.  
The only component added is [./components/login-button-google.tsx](./components/login-button-google.tsx)

Instructions were followed from:
- https://docs.expo.dev/guides/google-authentication/
- https://react-native-google-signin.github.io/docs/install
- https://github.com/react-native-google-signin/google-signin/blob/master/example/src/App.tsx

Expected: at least google signin button is displayed, unsure if I wired-up the rest correctly.

Actual: error
```
 (NOBRIDGE) ERROR  Invariant Violation: TurboModuleRegistry.getEnforcing(...): 'RNGoogleSignin' could not be found. Verify that a module by this name is registered in the native binary. [Component Stack]
```



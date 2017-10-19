# react-native-playground
Testing React Native

###### Topics still to explore
- Animations
- WebSockets
- Push Notifications

###### Animations
TODO: Slide FlatList items from the right on component mount.

###### Websockets
TODO: Receive from and send something over websocket.

For testing purposes WebSocket server will be installed to the machine.
https://github.com/websockets/ws
```
npm i ws
```
###### Push Notifications
TODO
###### Redux
https://github.com/reactjs/redux
http://redux.js.org/
```
npm i --save redux
npm i --save react-redux
```
###### Custom Fonts
https://fonts.google.com/
In this project, we are using Roboto from Google Fonts.

When importing files to workspace:
- The name should be lowercase.
- There shouldn't be any spaces in the name.
- Use an underscore to define the style, for example, roboto_bold.
###### Font Icons
https://github.com/oblador/react-native-vector-icons
```
npm i --save react-native-vector-icons
react-native link react-native-vector-icons
```
We are using just the MaterialCommunityIcons.
https://materialdesignicons.com/

###### React Navigation
https://reactnavigation.org/
https://github.com/react-community/react-navigation
```
npm i --save react-navigation
```
There's Stack- and Drawernavigation.
###### React Native Popup Menu
https://github.com/instea/react-native-popup-menu
```
npm i --save react-native-popup-menu
```
Todo entry (src/components/todo/Item) has this.
###### React Native Dotenv
```
npm i react-native-dotenv --save-dev
```
Here used to store social app ids and secrets.
###### React Native Simple Auth
https://github.com/adamjmcgrath/react-native-simple-auth
```
npm i react-native-simple-auth --save
```
Provides Google, Facebook, Twitter and Tumblr logins. Here we use only Google, Facebook and Twitter. The 'login', doesn't actualy store the user data.
- https://console.cloud.google.com
- https://developers.facebook.com
- https://apps.twitter.com
###### React Native Simple Toast
https://github.com/xgfe/react-native-simple-toast
```
npm i react-native-simple-toast --save
react-native link react-native-simple-toast
```
Used to make small notifications, such as saving new or updating todo entry. 
###### React Native Camera
https://github.com/lwansbrough/react-native-camera
```
npm i react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
react-native link react-native-camera
```
Faced an error
```
Warning: Native component for "RCTCamera" does not exist
```
On android go to ```./android/app/build.gradle``` and add  ```compile project(':react-native-camera')``` to the dependencies section.
###### Network Connectivity Status
https://facebook.github.io/react-native/docs/netinfo.html
Alert user, if the device's connection is lost.
###### AsyncStorage
https://facebook.github.io/react-native/docs/asyncstorage.html
Saving data localy. Useful when network connection is lost. Not well implemented here, but you can view it in the ```src/components/todo/Form```.
###### Runing On Device
https://facebook.github.io/react-native/docs/running-on-device.html

###### Websockets
###### Websockets


Method 1: Using adb reverse (recommended)
Common ADB location on windows:
```
C:\Users\JohnDoe\AppData\Local\Android\sdk1\platform-tools
```

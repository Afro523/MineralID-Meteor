// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.example.josh.mineral',
  name: 'Mineral I.D.',
  description: 'Educational app for mineralology',
  author: 'Joshua Resnick',
  email: 'contact@example.com',
  website: 'http://example.com'
});
// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'icons/icon-120.png',
	'iphone_3x': 'icons/icon-180.png',
	'ipad ': 'icons/icon-76.png',
	'ipad_2x': 'icons/icon-152.png',
	'ipad_pro': 'icons/icon-167.png',
	'ios_settings ': 'icons/icon-29.png',
	'ios_settings_2x ': 'icons/icon-58.png',
	'ios_settings_3x ': 'icons/icon-87.png',
	'ios_spotlight ': 'icons/icon-40.png',
	'ios_spotlight_2x ': 'icons/icon-80.png',
	'android_mdpi ': 'icons/icon-48.png',
	'android_hdpi ': 'icons/icon-72.png',
	'android_xhdpi ': 'icons/icon-96.png',
	'android_xxhdpi': 'icons/icon-144.png',
	'android_xxxhdpi': 'icons/icon-192.png',
});

App.launchScreens({
  //'iphone': 'splash/Default~iphone.png',
  //'iphone_2x': 'splash/Default@2x~iphone.png',
  // More screen sizes and platforms...
});
// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

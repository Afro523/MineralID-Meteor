// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.meteor.josh.mineral',
  name: 'Mineral Pocket Guide',
  description: 'Educational app for discovering and learning about mineralology',
  author: 'Joshua Resnick',
  email: 'Jresnick.public@gmail.com'
});
// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'icons/icon-120.png',
	'iphone_3x': 'icons/icon-180.png',
	'ipad_2x': 'icons/icon-152.png',
	'ipad_pro': 'icons/icon-167.png',
});

App.launchScreens({
  'iphone_2x': 'splash/iphone_2x.png',
	'iphone5': 'splash/iphone5.png',
	'iphone6': 'splash/iphone6.png',
	'iphone6p_portrait': 'splash/iphone6p_portrait.png',
	'iphone6p_landscape': 'splash/iphone6p_landscape.png',
	'ipad_portrait': 'splash/ipad_portrait.png',
	'ipad_portrait_2x': 'splash/ipad_portrait_2x.png',
	'ipad_landscape': 'splash/ipad_landscape.png',
	'ipad_landscape_2x': 'splash/ipad_landscape_2x.png',
});
// Set PhoneGap/Cordova preferences.
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

DZ.init({
    appId  : 'YOUR_APP_ID',
    channelUrl : 'http://YOUR_DOMAIN/channel.html'
});

DZ.login(function(response) {
	if (response.authResponse) {
		console.log('Welcome!  Fetching your information.... ');
		DZ.api('/user/me', function(response) {
			console.log('Good to see you, ' + response.name + '.');
		});
	} else {
		console.log('User cancelled login or did not fully authorize.');
	}
}, {perms: 'basic_access,email'});
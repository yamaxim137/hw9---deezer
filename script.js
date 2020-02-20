document.addEventListener('DOMContentLoaded', f137);


var f137 = DZ.init({
    appId  : '395764',
    channelUrl : 'https://my137.com',
	// player : {
	// 	onload : function(){}
	// }
	
	
	player: {
		// container: 'player',
		container: 'dz-root',
		width : 800,
		height : 300,
		onload : function(){new PlayerSearch('#search');}
	}
});

// DZ.login(function(response) {
// 	if (response.authResponse) {
// 		console.log('Welcome!  Fetching your information.... ');
// 		DZ.api('/user/me', function(response) {
// 			console.log('Good to see you, ' + response.name + '.');
// 		});
// 	} else {
// 		console.log('User cancelled login or did not fully authorize.');
// 	}
// }, {perms: 'basic_access,email'});


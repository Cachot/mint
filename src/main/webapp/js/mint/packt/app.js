Ext.application({
	name: 'packt' ,
	extend: 'packt.Application',
	requires: [
	    'packt.*'
	],
	//autoCreateViewport: 'packt.view.main.Main'
	autoCreateViewport: false //not to auto-render, because display splash screen first and then the login screen
});
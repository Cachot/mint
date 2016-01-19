Ext.define('packt.Application',{  //1  means application has single page
	extend: 'Ext.app.Application',
	name: 'packt',  //2  
	views: [  //3
	
	],
	
	controllers: [  //4
	    'Ext.app.Controller'
	],
	
	stores: [  //5
	
	],
	
	launch: function(){  //6  this will be called after all the application's controllers are initialized
		//TODO - Launch the application
	},
	
	init: function() {
		var me = this; // 1 reference to Ext.appliccation itself
		me.splashscreen = Ext.getBody().mask( // 2
			'Loading application', 'splashscreen'
		);
	}
});
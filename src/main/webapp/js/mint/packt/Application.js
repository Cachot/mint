Ext.define('packt.Application',{  // means application has single page
	extend: 'Ext.app.Application',
	name: 'packt',  
	views: [  // need to declare the views we are using in this case
	    'login.Login'   
	],
	
	controllers: [  // need to declare the controllers we are using in this case
	    'Ext.app.Controller'
	],
	
	stores: [  // need to declar the stores we are using in this case
	
	],
	
	launch: function(){  // this will be called after all the application's controllers are initialized
		//TODO - Launch the application
		var me = this;
		var task = new Ext.util.DelayedTask(function(){
			// destroy splashscreen
			//Ext.getBody().unmask(); 
			
			// fade out the body mask
			me.splashscreen.fadeOut({
			    duration: 1000,
			    remove: true
			});
			
			//Fade out the icon and message
			me.splashscreen.next().fadeOut({  // next mothod is used to get the next node (without it, only the first <div> will fade out
			    duration:1000,
			    remove:true,
			    listeners: { 
			    	afteranimate: function(el, startTime, eOpts){  // after animation function run
			    		//console.log('launch') // IE use window.console.log
			    		Ext.widget('login-dialog'); // instantiate initial view
			    	}
			    }
		    });
		});
		task.delay(2000);  // show splashscreen for 2 seconds and then play fadeout animation
		
	},
	
	init: function() {
		var me = this; // reference to Ext.appliccation itself
		me.splashscreen = Ext.getBody().mask( // get HTML body section
			'Loading application', 'splashscreen'
		);
		me.splashscreen.addCls('splashscreen'); // for splash background and text
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0],{
		    cls:'x-splash-icon'
		});
	}
});
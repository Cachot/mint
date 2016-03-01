/** Using HTML5 local storage for translate component
function loadLocale(){  // avoid creating global variables (not a good JS practice)
	var lang = localStorage ? (localStorage.getItem('user-lang') || 'en'):'en',  //  verify wether the local storage is available, English will be default
	file = Ext.util.Format.format("js/mint/packt/resources/locale/{0}.js", lang);  // receive the path of the translation file
	Ext.Loader.loadScript({url: file, onError: function(){  
	alert('Error loading locale file. Please contact system administrator.');
	var extJsFile = Ext.util.Format.Format.format("js/ext/classic/locale/locale-{0}.js", lang);
	Ext.Loader.loadScript({utl: extJsFile});
	}});
}
loadLocale();  // call function
*/
Ext.define('packt.Application',{  // means application has single page
	extend: 'Ext.app.Application',
	name: 'packt',  
	glyphFontFamily: 'FontAwesome',
	views: [  // need to declare the views we are using in this case
	    //'login.Login' '
	    'main.Main'
	],
	
	controllers: [  // need to declare the controllers we are using in this case
	    'Ext.app.Controller'
	],
	
	stores: [  // need to declar the stores we are using in this case

	],
/*	
	launch: function(){  // this will be called after all the application's controllers are initialized
		Ext.tip.QuickTipManager.init(); // display the warning as a tooltip, An alternative: using the configuration enableQuickTips: true
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
*/
	init: function(){
		Ext.create('packt.view.main.Main');
	}
	
});
Ext.define('packt.view.main.Header',{

	extend: 'Ext.toolbar.Toolbar',
	xtype: 'appheader',
	requires: [  
	    //'packt.view.locale.Translation'  // mutil-language
	],
	ui: 'footer',  // allow to use a specific theme for a component
	items: [{
	
		xtype: 'component',
		bind: {
			html: '{appHeaderIcon}'
		}
	},{
	
		xtype: 'component',
		bind: {
			html: '{appName}'
		}
	},{
	
		xtype: 'tbfill'  // toolbar fill, it will align the translation and logout buttons to the right, filling the Toolbar class with space 
		// instead of { xtype: 'tbfill'}, can use '->' as a shortcut
	}
	/*,{
	
		xtype: 'translation'  
	
	   }*/
	,{
	
		xtype: 'tbseparator'  // toolbar separator declared, add "|"
		// instead of{xtype: 'tbseparator'}, can use '-'
	},{
	
		xtype: 'button',
		itemId: 'logout',  // assign itemid for reference this button globally
		text: 'Logout',
		//text: translations['logout'],
		reference: 'logout',  // make it easier to retrieve by ViewController
		iconCls: 'fa fa-sign-out fa-lg buttonIcon', // add a custom style (buttonIcon)
		listeners: {
			click: 'onLogout'
		}
	}]
});
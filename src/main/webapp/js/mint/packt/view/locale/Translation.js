Ext.define('packt.view.locale.Translation',{

	extend: 'Ext.button.Split',
	xtype: 'translation',
	requires: ['packt.view.locale.TranslationController'],
	controller: 'translation',
	menu: {
		xtype: 'menu',
		defaults:{
			listeners:{
				click: 'onMenuItemClick'
			}
		},
		items:[
		    {
		    	xtype: 'menuitem',
		    	iconCls: 'fa fa-language',  // can add CSS for iconCls, see flagIcon.scss
		    	text: 'English'
		    },{
		    	xtype: 'menuitem',
		    	iconCls: 'fa fa-car',  // Flag set: http://www.famfamfam.com/
		    	text: 'Chinese'
		    },{
		    	xtype: 'menuitem',
		    	iconCls: 'fa fa-flag',
		    	text: 'Spanish'
		    }
		]	
	}
});
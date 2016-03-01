Ext.define('packt.view.content.history.History',{
	extend: 'Ext.panel.Panel',
	xtype: 'history',
	layout:{
		type: 'vbox'
	},
	defaults:{
		width: "95%"
	},
	//controller: 'history',
	bodyPadding: '0 30 0 20',
	cls: 'pw-history',
	
	initComponent: function(){		
		//TODO

		this.introductionPanel = Ext.widget('introduction');
		
		this.callParent();		
	}

});
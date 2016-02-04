Ext.define('packt.view.security.User',{
	extend: 'Ext.panel.Panel',
	xtype: 'user',
	requires: [
	    'packt.view.security.UsersGrid'
	],
	controller: 'user',
	viewModel: {
		type: 'user'
	},
	frame: true,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [
	    {
	    	xtype: 'users-grid',
	    	flex:1
	    }
	],
	dockedItems: [
	    {
	    	xtype: 'toolbar',
	    	dock: 'top',
	    	items: [
	    	    {
	    	    	xtype: 'button',
	    	    	text: 'Add',
	    	    	glyph: packt.util.Glyphs.getIcon('add'),
	    	    	listeners: {
	    	    		click: 'onAdd'
	    	    	}
	    	},{
	    		xtype: 'button',
	    		text: 'Edit',
	    		glyph: packt.util.Glyphs.getIcon('edit'),
	    		listeners: {
	    			click: 'onEdit'
	    		}
	    	},{
	    		xtype: 'button',
	    		text: 'Delete',
	    		glyph: packt.util.Glyphs.getIcon('destroy'),
	    		listeners: {
	    			click: 'onDelete'
	    		}
	    	}]
	}]
});
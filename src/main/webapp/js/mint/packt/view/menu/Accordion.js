Ext.define('packt.view.menu.Accordion',{

	extend: 'Ext.panel.Panel',
	xtype: 'mainmenu',
	width: 250,
	layout: {
		type: 'accordion',  // this layout can expand or collapse the desired module
		multi: true
	},
	collapsible: true,
	split: true,  // only the first module should be expanded
	iconCls: 'fa fa-sitemap fa-lg',
	title: 'menu'
	//title: translations.menu
});
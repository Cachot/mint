Ext.define('packt.view.main.Panel',{
	extend: 'Ext.tab.Panel',
	xtype: 'mainpanel',
	activeTab: 0,  // TabPanel component is going to display
	items: [
	{
		xtype: 'panel',  // can be any type
		closable: false,
		iconCls: 'fa fa-home fa-lg tabIcon',
		title: 'Home'
	}]
});
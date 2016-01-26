Ext.define('packt.view.main.Footer',{
	extend: 'Ext.container.Container',  // It's the lightest component, use it whenever possible
	xtype: 'appfooter',
	cls: 'app-footer',  // add a style
	height: 30,
	layout: 'center',  // inherits from the fit layout, only support a single child
	items:[
	{
		xtype: 'component',
		width: 350,
		componentCls: 'app-footer-title',  
		bind:{
			html: '{footer}'
		}
	}]
});
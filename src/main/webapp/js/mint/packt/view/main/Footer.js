Ext.define('packt.view.main.Footer',{
	extend: 'Ext.container.Container',  // It's the lightest component, use it whenever possible
	xtype: 'pwfooter',
	cls: 'pw-footer',  // add a style
	items:[
	{
		xtype: 'component',
		componentCls: 'pw-footer-title',  
		bind:{
			html: '{footer}'  // reference in main.js and the footer text in main model
		}
	}]
});
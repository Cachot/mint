Ext.define('packt.view.main.MainModel',{

	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	data: {  // simplest way to prepopulate data
		name: 'packt',
		appName: 'Car Rental Store',
		appHeaderIcon: '<span class="fa fa-car fa-lg app-header-logo">',
		footer: 'Mint extjs practice - Cachot - http://www.mintelcn.com'
	}
})
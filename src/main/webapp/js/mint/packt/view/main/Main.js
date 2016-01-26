Ext.define('packt.view.main.Main',{
    //extend: 'Ext.container.Viewport',  //change Container to Viewport so that we can use the Main class as the base class of the application
    //above is the old way, Extjs 5 introduces using Viewport plugin, more information about Extjs plugins: http://www.sencha.com/blog/advanced-plugin-development-with-ext-js/
    extend: 'Ext.container.Container',
    plugins: 'viewport',  // advantage: we can still reuse this class in other contexts
    //ptype
    xtype: 'app-main',
    requires: [
        'packt.view.main.Header',
        'packt.view.main.Footer',
        'packt.view.main.Panel',
        'packt.view.main.MainController',
        'packt.view.main.MainModel'
    ],
    controller: 'main',
    viewModel: {
    	type: 'main'
    },
    layout: {
    	type: 'border'
    },
    
    items: [{
    	region: 'center',
    	xtype: 'mainpanel'
    },{
    
    	region: 'north',
    	xtype: 'appheader'
    },{
    
    	region: 'south',
    	xtype: 'appfooter'
    },{
    
    	region: 'west',
    	xtype: 'container',
    	width: 200,
    	split: true
    }]
});
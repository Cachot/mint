Ext.define('packt.view.main.Main',{
    //extend: 'Ext.container.Viewport',  //change Container to Viewport so that we can use the Main class as the base class of the application
    //above is the old way, Extjs 5 introduces using Viewport plugin, more information about Extjs plugins: http://www.sencha.com/blog/advanced-plugin-development-with-ext-js/
    extend: 'Ext.container.Container',
    plugins: 'viewport',  // advantage: we can still reuse this class in other contexts
    //ptype
    require:[
        'Ext.button.segmented',
        'Ext.list.Tree',
        'Ext.layout.container.VBox',
        'packt.view.main.MainMenu'
    ],
    controller: 'main',
    viewModel: 'main',
    
    layout: 'fit',
    scrollable: 'y',
    
    listeners:{
    	render: 'onMainViewRender'
    },
    
    initComponent:function() {
    	
    	this.banner = Ext.create('Ext.Component',{
    		cls: 'pw-banner',
    		region: 'north',
    		//html: '<div class = "pw-logo">JUST <span>ME</span></div>'
    		html: '<div class = "pw-title">JUST <span>ME</span></div>'
    	})
    
        this.items = [this.banner,{
        	xtype: 'container',
        	name: 'mainContainer',
        	region: 'center',
        	layout: 'border',
        	items:[{
        	    region: 'center',
    	        xtype: 'container',
    	        name: 'mainCardCt',
    	        reference: 'mainCardPanel',
    	        flex: 100,
    	        itemId: 'contentPanel',
    	        layout: {
    		        type: 'card',
    		        anchor: '100%'
    	        }
            },{
    	        region: 'north',
    	        xtype: 'pwheader'
            },{
    	        region: 'south',
    	        xtype: 'pwfooter'
            },{
    
    	        region: 'west',
    	        xtype: 'mainmenu',
    	        bind: {
    	        	data: '{navigateNodes}'
    	        },
    	        listeners: {
    		        'navigating': 'onNavigating'
    	        }
            }]
        }];
        
        this.callParent();
    }
});
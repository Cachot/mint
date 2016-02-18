Ext.define('packt.view.main.MainModel',{

	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	/*
	data: {  // simplest way to prepopulate data
		name: 'packt',
		appName: 'Private Website',
		appHeaderIcon: '<span class="fa fa-car fa-lg app-header-logo">',
		footer: 'Extjs practice - Cachot - http://www.mintelcn.com'
	},
	*/
	
	constructor: function(config){
		config = config || {};
		var hash = window.location.hash;
		if(hash){
			hash = hash.slice(1).toLowerCase();
		}else{
			hash = 'aboutme'; // about me; blog; gallery; history; contact;
		}
		
		config.data = {
			name: 'packt',
			appName: 'Personal Website',
			appHeaderIcon: '<span class="fa fa-users">',
			footer: 'Extjs Practice - Cachot - http: //www.mintelcn.com',
			currentView: null,
			navigateNodes: [{
				text: 'About Me',
				//text: LANG['aboutMe'],
				//iconCls: 'navi-icon-aboutme',
				viewType: 'aboutme',
				actived: 'aboutme' === hash
			},{
				text: 'Blog',
				//text: LANG['blog'],
				//iconCls: 'navi-icon-blog',
				viewType: 'blog',
				actived: 'blog' === hash
			},{
				text: 'Gallery',
				//text: LANG['gallery'],
				//iconCls: 'navi-icon-gallery',
				viewType: 'gallery',
				actived: 'gallery' === hash
			},{
				text: 'History',
				//text: LANG['history'],
				//iconCls: 'navi-icon-history',
				viewType: 'history',
				actived: 'history' === hash
			},{
				text: 'Contact',
				//text: LANG['contact'],
				//iconCls: 'navi-icon-contact',
				viewType: 'contact',
				actived: 'contact' === hash
			}]
		}
		
		this.callParent(arguments);  // for override
	}
});
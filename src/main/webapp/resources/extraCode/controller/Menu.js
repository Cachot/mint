Ext.define('packt.controller.Menu',{  // in MVC approach, all controllers are created inside the app/controller folder, while in the MVVM approach, ViewController is created in the same folder as the view

	extend: 'Ext.app.Controller',
	stores:[
	    'Menu'
	    ],
	refs: [
	{
		ref: 'mainPanel',
		selector: 'mainpanel'
	}],
	renderDynamicMenu: function(view, options){  // render event, it is usually the component itself and options
		console.log('menu rendered');  // test if the function run
		var dynamicMenus = [];  // create an empty array so that can add modules to it
		view.body.mask('Loading Menus... Please wait...');
		this.getMenuStore().load(function(records, op, success){  // load nested JSON from server
			//get+StoreName+Store 
			Ext.each(records, function(root){  // for each record returned from the Store
				var menu = Ext.create('packt.view.menu.Tree',{
					title: root.get('text'), //#6
					//title: translations[root.get('text')],
					iconCls: root.get('iconCls')  //#7
				});
				var treeNodeStore = root.items(),  //#8
				nodes=[],
			item;
				for (var i=0; i<treeNodeStore.getCount(); i++){
					item = treeNodeStore.getAt(i); 
					
					nodes.push({  // push a new node into an array for Model instance
						text: item.get('text'),
						//text: translations[item.get('text')],
						leaf: true,
						glyph: item.get('iconCls'),  //#13
						id: item.get('id'),
						className: item.get('className')
					});
				}
				menu.getRootNode().appendChild(nodes);  // append nodes to a specific node
				dynamicMenus.push(menu);
			});
			view.add(dynamicMenus);  // add all the menus at once, avoid browser reflow
			view.body.unmask();
	});
	},
	
	onTreePanelItemClick: function(view, record, item, index, event, options){
		var mainPanel = this.getMainPanel();
		var newTab = mainPanel.items.findBy(
		    function(tab){
		    	return tab.title === record.get('text');
		    });
		    
		if(!newTab){
			newTab = mainPanel.add({
			    xtype: record.get('className'),
			    closable: true,
			    glyph: record.get('glyph'),
			    title: record.get('text')
			});
		}
		mainPanel.setActiveTab(newTab);
	},
	
	init: function(application){  // is called when the application boots, before the application's launch function
		this.control({  
		    "menutree": {
		    	itemclick: this.onTreePanelItemClick
		    },
		    "mainmenu":{
		    	render: this.renderDynamicMenu
		    }
		});
	}
	// to listen above two method, need to define: selector, event and the method
/**	
	"{selector}":{  // for selectors, we usually use the xtype component
		event1: this.methodToBeExecuted1,
		event2: this.methodToBeExecuted2
	}
*/
	});
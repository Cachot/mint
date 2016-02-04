Ext.define('packt.store.Menu',{

	extend: 'Ext.data.Store',
	alias: 'store.menu',
	storeId: 'menu',
	requires: [
	    'packt.util.Util'
	],
	model: 'packt.model.menu.Accordion',  // what type of data the store needs to load
	proxy: {  // how and where to get data
		type: 'ajax',
		url: 'php/menu/list.php',  
		
		reader: {  // how to decode the information, and transform it into a collection of athe specified models
			type: 'json',
			rootProperty: 'data'
		},
		listeners: {
			exception: function(proxy, response, operation){  //#6
				packt.util.Util.showErrorMsg(response, responseText);
			}
		}
	}
})
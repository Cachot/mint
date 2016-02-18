Ext.define('packt.model.menu.TreeNode',{

	extend: 'Ext.data.Model',
	fields: [
	    { name: 'id', type: 'int'},
	    { name: 'text'},
	    { name: 'iconCls'},
	    { name: 'className'},  // value will be used as xtype
	    { name: 'parent_id', mapping: 'menu_id'}  // In the JSON, when load data from the server, menu_id will instead of parent_id
	]
});
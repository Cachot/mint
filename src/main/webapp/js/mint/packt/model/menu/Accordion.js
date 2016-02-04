Ext.define('packt.model.menu.Accordion',{

	extend: 'Ext.data.Model',
	requires: [
	    'packt.model.menu.TreeNode'
	],
	fields: [  // need a field that works as its unique identifier
	    { name: 'id', type: 'int'},  // defining this as unique field
	    // if unique identifier of the Model is not called id, need using idProperty configuration
	    { name: 'text'},
	    { name: 'iconCls'}
	],
	hasMany: {
		model: 'packt.model.menu.TreeNode',
		foreignKey: 'parent_id',
		name: 'items'  // a new field named items will be created for the Accordion Model
	}
});
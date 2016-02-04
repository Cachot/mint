Ext.define('packt.model.security.User',{
	extend: 'packt.model.security.Base',  // #1
	
	fields: [
	    {name: 'name'},
	    {name: 'userName'},
	    {name: 'email'},
	    {name: 'picture'},
	    {name: 'groups_id', type: 'int'}
	]
});
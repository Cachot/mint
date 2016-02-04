Ext.define('packt.view.main.MainController',{

	extend: 'Ext.app.ViewController',
	requires: [
	    'packt.util.Util'
	],
	alias: 'controller.main',
	
	onLogout: function(button, e, options){
		var me = this;
		Ext.Ajax.request({
		
			url: 'php/security/logout.php',
			scope: me,  //because there are two functions are declared inside maincontroller class
			success: 'onLogoutSuccess',
			failure: 'onLogoutFailure'
		});
	},
	
	onLogoutFailure: function(conn, response, options, eOpts){
		packt.util.Util.showErrorMsg(conn.responseText);
	},
	
	onLogoutSuccess: function(conn, response, options, eOpts){
		var result = packt.util.Util.decodeJSON(conn.responseText);
		
		if(result.success){
			this.getView().destroy();
			window.location.reload();  //reload the application displaying the Login screen again
		} else{
			packt.util.Util.showErrorMsg(result.msg);
		}
	}
})
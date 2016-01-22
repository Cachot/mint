Ext.define('packt.view.login.LoginController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',  //alias is always lowercase

	onTextFieldSpecialKey: function(field, e, options){}, 
	onTextFieldKeyPress: function(field, e, options){},  //
	onButtonClickCancel: function(button, e, options){  // check doc. to know which are the parameters the event accepts, and list them as parameters in the code
		// logic sequence: 1.get the reference 2. call the function
		this.lookupReference('form').reset();  // lookupReference method can retrieve reference,  reset() method from the form class
	},
	onButtonClickSubmit: function(button, e, options){  
		// programming logic: 1. use the submit method which is provided by the form class 2. use Ajax call to submit the values to the server
		// logic sequence: 1. get the form reference 2. get the window reference (we can close it once the user has been authenticated) 3. send login information to the server 4. handle the server response
		var me = this;
		if (me.lookupReference('form').isValid()){  // check if entered all information
			me.doLogin();  // helper method which will handle the authentication
		}
	
	},
	doLogin: function(){
		var me = this,
		form = me.lookupReference('form');
		
		form.submit({
			clientValidation: true,  // validate the information one more time
			url: 'php/security/login.php',  //#
			scope: me,  // seccess and failure callbacks belong to this class, so the scope is me.
			seccess: 'onLoginSeccess',  //callback method, this method at outside but it can be inside submit method:http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext.form.Basic-method-submit
			failure: 'onLoginFailure'  //callback method
		});
	}, 
	onLoginFailure: function(form, action){  // 1. not authenticated 2. error404
		var result = Ext.JSON.decode(action.response.responseText, true);  //#
		if (!result){  //$
			result = {};
			result.success = false;
			result.msg = action.response.responseText;
		}
		
		switch  (action.failureType) {
			case Ext.form.action.Action.CLIENT_INVALID:  //$
			    Ext.Msg.show({
			    	title: 'Error!',
			    	msg: 'Form field may not be submitted with invalid values',
			    	icon: Ext.Msg.ERROR,
			    	buttons: Ext.Msg.OK
			    });
			    break;
			case Ext.form.action.Action.SERVER_INVALID:  //@
			    Ext.Msg.show({
			    	title: 'Error!',
			        msg: result.msg,  //$
			        icon: Ext.Msg.ERROR,
			        buttons: Ext.Msg.OK
			    });
		}
	}, 
	onLoginSuccess: function(form, action){  // close the window and display the main screen
		this.getView().close();  // get the reference of the login window class
		Ext.create('packt.view.main.Main');
	
	} 
})
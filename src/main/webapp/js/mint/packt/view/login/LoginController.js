Ext.define('packt.view.login.LoginController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',  //alias is always lowercase
	
	requires: [
	    'packt.util.Util',
	    'packt.view.login.CapsLockTooltip',
	    'packt.util.SessionMonitor'
	],

	onTextFieldSpecialKey: function(field, e, options){  //  user can hit Enter to login
		if (e.getKey() === e.ENTER) {
			this.doLogin();
		}
	}, 
	onTextFieldKeyPress: function(field, e, options){
		var charCode = e.getCharCode(),
		me = this;
		
		if((e.shiftKey && charCode >= 97 && charCode <= 122) ||  // pressed shift key or small alphabet
		    (!e.shiftKey && charCode >= 65 && charCode <= 90)){  //value of each key http://www.asciitable.com/ 
		    	if(me.capslockTooltip === undefined){  // show or not show: verify that there is a reference of the CapsLockTooltip
		    		me.capslockTooltip = Ext.widget('capslocktooltip');
		    	}
		    	me.capslockTooltip.show();
		    } else {
		    	if(me.capslockTooltip !== undefined){
		    		me.capslockTooltip.hide();
		    	}
		    }
	},  
	onButtonClickCancel: function(button, e, options){  // Parameters: this: Button, e: Event, eOpts: Object. check doc. to know which are the parameters the event accepts, and list them as parameters in the code
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
		
		this.getView().mask('Authenticating... Please wait...');  // add a loading mask to avoid more request
		
		form.submit({  // submit is a shortcut to the doAction method from the same class, parameters for form submit call: url, success, and failure callbacks, among others
			clientValidation: true,  // validate the information one more time
			url: 'php/security/login.php',  //#
			scope: me,  // seccess and failure callbacks belong to this class, so the scope is me.
			success: 'onLoginSuccess',  //callback method, this method at outside but it can be inside submit method:http://docs.sencha.com/extjs/5.0.0/apidocs/#!/api/Ext.form.Basic-method-submit
			failure: 'onLoginFailure'  //callback method
		});
	}, 
	onLoginFailure: function(form, action) {
		this.getView().unmask();
		var result = packt.util.Util.decodeJSON(action.response.responseText);
		    switch (action.failureType) {
		    	case Ext.form.action.Action.CLIENT_INVALID:
		    	    packt.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
		    	    break;
		    	case Ext.form.action.Action.CONNECT_FAILURE:
		    	    packt.util.Util.showErrorMsg(action.response.responseText);
		    	    break;
		    	case Ext.form.action.Action.SERVER_INVALID:
		    	    packt.util.Util.showErrorMsg(result.msg);
		    }
	},
/** old version, because we can reusing code for this part
	onLoginFailure: function(form, action){  // 1. not authenticated 2. error404
		var result = Ext.JSON.decode(action.response.responseText, true);  // get response from server with JSON, so we need to decode it
		if (!result){  // check whether the result variable is null, if it is null, we can receive the error 
			result = {};
			result.success = false;
			result.msg = action.response.responseText;  // we don't know what will be returned, if there is any error is returned, we can see the message through responseText
		}
		
		switch  (action.failureType) {  // parameters: falureType and response(Ext.Msg)
			case Ext.form.action.Action.CLIENT_INVALID:  
			    Ext.Msg.show({
			    	title: 'Error!',
			    	msg: 'Form field may not be submitted with invalid values',
			    	icon: Ext.Msg.ERROR,
			    	buttons: Ext.Msg.OK
			    });
			    break;
			case Ext.form.action.Action.CONNECT_FAILURE:  
			    Ext.Msg.show({
			    	title:'Error!',
			    	msg: 'Connect error, please try again',
			    	icon: Ext.Msg.ERROR,
			    	buttons: Ext.Msg.OK
			    });
			    break;
			case Ext.form.action.Action.SERVER_INVALID:  
			    Ext.Msg.show({
			    	title: 'Error!',
			        msg: result.msg,  //8
			        icon: Ext.Msg.ERROR,
			        buttons: Ext.Msg.OK
			    });
		}
	},
*/ 
	onLoginSuccess: function(form, action){  // close the window and display the main screen
		this.getView().unmask();
		this.getView().close();  // get the reference of the login window class
		Ext.create('packt.view.main.Main');
		packt.util.SessionMonitor.start();
	} 
});
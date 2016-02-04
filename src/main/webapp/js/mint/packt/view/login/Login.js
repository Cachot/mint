Ext.define('packt.view.login.Login',{  // name formate:App Namespace + package name + name of the JS file
	extend: 'Ext.window.Window',  
	xtype: 'login-dialog', // can also use alias instead of xtype, like "alias: 'widget.login-dialog'"
	requires: [  // Extjs doesn't know which ViewController or .. or .. class has needed alias
	    'packt.view.login.LoginController'
	    //'packt.view.locale.Translation'
	],
	controller: 'login',
	
	autoShow:true,  // auto display when instantiated
	
	height: 170,
	width: 360,
	layout: {
		type: 'fit'  // is used when the parent container has only one child, and it will used all space of parent
	},
	iconCls: 'fa fa-key fa-lg',   
	//title: translations['login'],
	title: 'Login',
	closeAction: 'hide',  // close: removed from DOM, and destroy the panel object hide: invisible destroy: cleans up the object and its resources
	closable: false,  
	draggable: false,  
	resizable: false,
	
	items: [
	{
		xtype: 'form',
		reference: 'form',  // ViewController has the method lookupReference(reference)
		bodyPadding: 15,  // form body: add space between the form and window border
		defaults: {
			xtype: 'textfield',
			anchor: '100%',  // occupy all the horizontal available space, child/parent
			labelWidth: 60,  // default is 100 px
			allowBlank: false,
			vtype: 'alphanum',
			minLength: 3,
			msgTarget: 'under',  // title/ under/ side/ none can also use tooltip(qtip)
			listeners: {
				specialKey: 'onTextFieldSpecialKey'  // form listeners
			}
		},
		items: [
		{
			name: 'user',
			fieldLabel: 'User',
			//fieldLabel: translations['user'],
			maxLength: 25
		},{
			inputType: 'password',  // bullet instead of character, other type: email, url, and tel
			name: 'password',
			fieldLabel: 'Password',
			//fieldLabel: translations['password'],
			vtype: 'customPass',
			msgTarget: 'side',
			id: 'password',  // avoiding using id in the components
			enableKeyEvents: true,
			listeners: {
				keypress: 'onTextFieldKeyPress',
				specialKey:'onTextFieldSpecialKey'
			}
		}],
		dockedItems: [  // of the form
		{
			xtype: 'toolbar',
			dock: 'bottom',  // top, right. left, bottom
			items:[
			/**
			{
				xtype: 'translation'
			},
			*/
			{
			    xtype: 'tbfill' // fill reduce space, let toolbar layout right-justified
			},{
				xtype: 'button', 
				iconCls: 'fa fa-times fa-lg',
				text: 'Cancel',
				//text: translations['cancel'],
				listeners: {  // MVVC need to add listener
					click: 'onButtonClickCancel'
				}
			},{
				xtype: 'button',
				formBind: true,  // the button only be enabled if the form has no error from the client validation
				iconCls: 'fa fa-sign-in fa-lg',
				text: 'Submit',
				//text: translations['submit'],
				listeners: {
					click: 'onButtonClickSubmit'
				}
			}]
		}]
	}]
}); 
Ext.define('packt.view.login.Login',{  // name formate:App Namespace + package name + name of the JS file
	extend: 'Ext.window.Window',  
	xtype: 'login-dialog', // can also use alias instead of xtype, like "alias: 'widget.login-dialog'"
	
	autoShow:true,  // auto display when instantiated
	height: 170,
	width: 360,
	layout: {
		type: 'fit'  // is used when the parent container has only one child, and it will used all space of parent
	},
	iconCls: 'fa fa-key fa-lg',   
	title: 'Login',
	closeAction: 'hide',  // close: removed from DOM, and destroy the panel object hide: invisible destroy: cleans up the object and its resources
	closable: false,  
	draggable: false,  
	resizable: false,
	
	items: [
	{
		xtype: 'form',
		bodyPadding: 15,  // form body: add space between the form and window border
		defaults: {
			xtype: 'textfield',
			anchor: '100%',  // occupy all the horizontal available space, child/parent
			labelWidth: 60,  // default is 100 px
			allowBlank: false,
			vtype: 'alphanum',
			minLength: 3,
			msgTarget: 'under'  // title/ under/ side/ none can also use tooltip(qtip)
		},
		items: [
		{
			name: 'user',
			fieldLabel: 'User',
			maxLength: 25
		},{
			inputType: 'password',  // bullet instead of character, other type: email, url, and tel
			name: 'password',
			fieldLabel: 'Password',
			vtype: 'customPass',
			msgTarget: 'side'
		}],
		dockedItems: [  // of the form
		{
			xtype: 'toolbar',
			dock: 'bottom',  // top, right. left, bottom
			items:[
			{
			    xtype: 'tbfill' // let toolbar layout right-justified
			},{
				xtype: 'button', 
				iconCls: 'fa fa-times fa-lg',
				text: 'Cancel'
			},{
				xtype: 'button',
				formBind: true,  // the button only be enabled if the form has no error from the client validation
				iconCls: 'fa fa-sign-in fa-lg',
				text: 'Submit'
			}]
		}]
	}]
}); 
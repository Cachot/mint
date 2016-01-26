Ext.define('packt.view.login.CapsLockTooltip',{
	extend: 'Ext.tip.QuickTip',
	xtype: 'capslocktooltip',
	target: 'password', // only accepts the id of the component
	anchor: 'top',  // anchored to a particular side of the target element
	anchorOffset: 0,
	width: 300,
	 dismissDelay: 0,
	 autoHide: false,
	 title: '<div class= "fa fa-exclamation-triangle"> Caps Lock is On</div>',
	 html: '<div>Having Caps Lock on may cause you to enter' + // + means one line
	     'your password incorrectly.</div><br/>' +
	     '<div>You should press Caps Lock to turn it off' +
	     'before entering your password.</div>'
});
Ext.define('packt.view.content.aboutme.AboutMe',{
	extend: 'Ext.panel.Panel',
	xtype: 'aboutme',
	layout:{
		type: 'vbox'
	},
	defaults:{
		width: "95%"
	},
	cls: 'pw-aboutme',
	items:[
	    
	]
/*	
	listeners: {
		activate: "onMainPanelActivate"
	},
	controller: 'aboutme',
	viewModel: 'aboutme',

	bodyPadding: "0 0 0 25",
	
	initComponent: function(){
		this.image = Ext.create("Ext.Img",{
			height: '580px',
			width: '200px',
			cls: 'pw-photoid',
			bind: {
				src: '../../../../../../resources/images/user/idphoto.jpg'
				//src: 'resources/profileImage/currentUser.picture}' //mastering page 200
			}
		});
		
		
		//TODO
		
		this.items = [this.image];
		
		this.callParent();		
	}
*/
});
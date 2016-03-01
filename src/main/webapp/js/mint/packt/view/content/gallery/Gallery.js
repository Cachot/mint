Ext.define('packt.view.content.gallery.Gallery',{
	extend: 'Ext.panel.Panel',
	xtype: 'gallery',
	layout:{
		type: 'vbox'
	},
	defaults:{
		width: "50%"
	},
	//controller: 'gallery',
	bodyPadding: '0 30 0 20',
	cls: 'pw-gallery',
	
	initComponent: function(){
		this.image = Ext.create("Ext.Img",{
			height: '580px',
			width: '200px',
			cls: 'pw-photoid',
			bind: {
				src: 'resources/images/user/idphoto.jpg'
				//src: 'resources/profileImage/currentUser.picture}' //mastering page 200
			}
		});
		
		
		//TODO
		this.toPanel=Ext.create("Ext.panel.Panel",{
			layout:{
				type: "hbox",
				align:"stretch"
			},
			items:[
			    this.image
			]
		});
		this.items = [this.toPanel];
		
		this.callParent();		
	}

});
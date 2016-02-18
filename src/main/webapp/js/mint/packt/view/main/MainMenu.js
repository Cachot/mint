Ext.define('packt.view.main.MainMenu',{
	extend: 'Ext.Component',
	xtype: 'mainmenu',
	reference: "mainMenu",
	cls: 'pw-navi-list',
	
	initComponent: function(){
		this.tpl = new Ext.XTemplate(
		    '<tpl for=".">',
		        '<tpl if="children">',
		            '<div class="pw-navi-sep"></div>',
		        '</tpl>',
		        '<div viewType = "{viewType}" class="{[values.actived?"pw-navi-item-selected":""]}"><div class="{iconCls}{[values.children?"pw-navi-group":"pw-navi-item"]}">',
		            '{text}',
		        '</div></div>',
		        
		        '<tpl for="children">',
		            '<div viewType="{viewType}" class="{[values.actived?"pw-navi-item-selected":""]}"><div class="pw-navi-subitem">',
		                '{text}',
		            '</div></div>',
		        '</tpl>',
		    '</tpl>'
		);
		
		this.callParent(arguments);
		
		this.on('afterrender', function(comp){  // get element and click navi item function
		    var el = comp.getEl();
		    el.on('click', this.onClickCompEl, this);
		},this);
	},
	
	onClickCompEl : function(e){  // click function
		var target = Ext.get(e.getTarget());
		if(target.hasCls('pw-navi-item')||target.hasCls('pw-navi-subitem')){
			var it = target.parent();
			var viewType = it.getAttribute('viewType');
			this.fireEvent('navigating', viewType);
		}
	}
});
Ext.define('packt.view.main.MainController',{

	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	
	listen: {
		controller: {
			'#':{
				unmatchedroute: 'onRouteChange'
			}
		}
	},
	
	routes:{
		':node':'onRouteChange'
	},
	
	viewModel: 'main',
	lastView: null,
	
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
	},
	
	setCurrentView: function(hashTag){
		hashTag = (hashTag || '').toLowerCase();
		var view = hashTag;
		
		var me = this,
		    refs = me.getReferences(),
		    mainCard = refs.mainCardPanel,
		    mainLayout = mainCard.getLayout(),
		    mainviewport = refs.mainviewport,
		    menuItems=me.getViewModel().get("navigateNodes"),
		    lastView = me.lastView,
		    existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
		    newView;
		    
		if(lastView && lastView.isWindow){
			lastView.destroy();
		}
		
		lastView = mainLayout.getActiveItem();
		
		if(!existingItem){
			newView = Ext.create({
				xtype: view,
				routeId: hashTag,
				hideMode: 'offsets'
			});
		}
		
		if(!newView || !newView.isWindow){
			if(existingItem){
				if(existingItem !== lastView){
					mainLayout.setActiveItem(existingItem);
				}
				newView = existingItem;
			}
			else{
				Ext.suspendLayouts();
				mainLayout.setActiveItem(mainCard.add(newView));
				Ext.resumeLayouts(true);
			}
		}
		
		if(newView.isFocusable(true)){
			newView.focus();
		}
		
		me.lastView = newView;
		
		for(var i=0,len=menuItems.length;i<len;i++){
			if(menuItem[i]["children"]){
				for(var j=0, length = menuItems[i].children.length;j<length;j++){
					menuItems[i].children[j].actived=false;
						if(menuItems[i].children[j].viewType == hashTag){
							menuItems[i].children[j].actived=true;
					}
				}
			}else{
				menuItems[i]["actived"] = false;
				if(menuItems[i]["viewType"] == hashTag){
					menuItems[i]["actived"] = true;
				}
			}
		}
		
		me.getViewModel().set("navigateNodes",menuItems);
		me.lookupReference("mainMenu").setData(menuItems);
	},
	
	onNavigating: function(viewType){
		if(location.hash==("#"+viewType)){
			this.onRouteChange(viewType);
		}else{
			location.href='#'+viewType;
		}
	},
	
	onMainViewRender: function(){
		if(!window.location.hash){
			this.redirectTo("aboutme");
		}
	},
	
	onRouteChange: function(id){
		this.setCurrentView(id);
	}
});
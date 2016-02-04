Ext.define('packt.view.locale.TranslationController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.translation',
	
	init: function(){
		var lang = localStorage ? (localStorage.getItem('user-lang') || 'en'):'en',
		button = this.getView();
		button.setIconCls(lang);
		if(lang =='en'){
			button.setText('English');
		}else {
			button.setText('Chinese');
		}
	},
	
	onMenuItemClick: function(item, e, options){
		var menu = this.getView();
		menu.setIconCls(item.iconCls);  //set button to Menuitem
		menu.setText(item.text);
		localStorage.setItem("user-lang", item.iconCls);  // update the new language selected
		window.location.reload();  // reload the application
	}
})
Ext.define('packt.util.Util',{
	statics: {  //  do not require an instance of the class to be called. all methods will be inside the statics declaration
		decodeJSON: function(text) {  // we can call packt.util.Util.decodeJSON
			var result = Ext.JSON.decode(text, true);
			if (!result){
				result = {};
				result.success = false;
				result.msg = text;
			}
			
			return result;
		},
		showErrorMsg: function (text) {  
			Ext.Msg.show({
			
				title:'Error!',
				msg: text,
				icon: Ext.Msg.ERROR,
				buttons: Ext.Msg.OK
			});
		}
	}
});
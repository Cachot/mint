Ext.define('packt.util.SessionMonitor',{

	singleton:true,
	interval: 1000 * 10,
	lastActive: null,
	maxInactive: 1000 * 60 * 15,  // set 1 for testing
	remaining: 0,
	//ui: Ext.getBody(),
	
	window: Ext.create('Ext.window.Window',{	
		bodyPadding: 5,
		closable: false,
		closeAction: 'hide',
		modal: true,
		resizable: false,
		title: 'Session Timeout Warning',
		width: 325,
		items: [{
		
			xtype: 'container',
			frame: true,
			html: "Your session will automatically expires after 15 minutes of inactivity. If your session expires, any unsaved data will be lost."
			
		},{
		
			xtype: 'label',
			text: ''
		}],
		
			buttons: [{
			
				text: 'Continue Working',
				handler: function() {
					Ext.TaskManager.stop(packt.util.SessionMonitor.countDownTask);
					packt.util.SessionMonitor.window.hide();
					packt.util.SessionMonitor.start();
					
					Ext.Ajax.request({
					
						url: 'php/sessionAlive.php'
					});
				}
			},{
			
				text: 'Logout',
				action: 'logout',
				handler: function(){
					Ext.TaskManager.stop(packt.util.SessionMonitor.countDownTask);
					packt.util.SessionMonitor.window.hide();
					
					// find and invoke Logout button
					var btn = Ext.ComponentQuery.query('button#logout')[0];
					btn.fireEvent('click', btn);
				}
			}]
		}),
		
		constructor: function(config){
			var me =this;
			this.sessionTask = {
				run: me.monitorUI,
				interval: me.interval,
				scope: me
			};
			
			this.countDownTask = {
				run: me.countDown,
				interval: 1000,
				scope: me
			};
		},
		
		captureActivity: function(eventObj, el, eventOptions){
			this.lastActive = new Date();
		},
		
		monitorUI : function(){
			var now = new Date();
			var inactive = (now - this.lastActive);
			
			if(inactive >=this.maxInactive){
				this.stop();
				this.window.show();
				this.remaining = 60;
				Ext.TaskManager.start(this.countDownTask);
			}
		},
		
		start: function(){
			this.lastActive = new Date();
			this.ui = Ext.getBody();
			this.ui.on('mousemove', this.captureActivity, this);
			this.ui.on('keydown', this.captureActivity, this);
			Ext.TaskManager.start(this.sessionTask);
		},
		
		stop: function(){
			Ext.TaskManager.stop(this.sessionTask);
			this.ui.un('mousemove', this.captureActivity, this);
			this.ui.un('keydown', this.captureActivity,this);
		},
		
		countDown: function(){
			this.window.down('label').update('Your session will expire in' + this.remaining + 'second' + ((this.remaining == 1)?'.':'s.'));
			--this.remaining;
			if(this.remaining<0){
				var btn = Ext.ComponentQuery.query('button#logout')[0];
				btn.fireEvent('click',btn);
			}
		}
});
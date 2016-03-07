Ext.define('packt.view.content.aboutme.AboutMe',{
	extend: 'Ext.panel.Panel',
	xtype: 'contact',
	layout:{
		type: 'vbox'
	},
	scrollable: 'y', 
	defaults:{
		width: "95%"  // width of main card panel
	},
	//controller: 'aboutme',
	bodyPadding: '0 30 0 20',
	cls: 'pw-aboutme',
	
	initComponent: function(){
		
		this.infoPanel = Ext.create("Ext.panel.Panel",{
			width: 200,
			data:{  // for back-end
			},
			tpl: new Ext.XTemplate(  // tpl mast with 'data{}'
			    '<div class="pw-aboutme-info">',
			        '<p class="firstname">Cheng</p>',
			        '<p class="lastname">Zhang</p>',
			        '<p class="position">Front-end Developer</p>',
			      '<h2>About Me</h2>',
			        '<p class="content">asdf asfd ss sdf dsf wer sdf df d dfwer sd xxd we ewr asdf asdf wer wer ae asdf zxcv asdf adsad dfsa awe werzsd zxcv sdfas werds wqef sadf</p>',
			        '<p class="content">asd afsd sdf sdf sd sdf asdfwe werzsd zxcv sdfas werds wqef sadf <a href="#history">see more</a></p>',
			    '</div>'
			)
		});
		
		this.weiboPanel = Ext.create("Ext.panel.Panel",{  //http://jingyan.baidu.com/article/b7001fe1763f970e7282dd18.html
			width: 200,
			data:{},
			tpl: new Ext.XTemplate(
			    '<div class="pw-weibo">',
			    '<h2>Weibo</h2>',
			      '<p>Need extra Js</p>',
			      //TODO
			      '<div class="pw-bowen">',
			        '<div class="top"></div>',
			        '<p class="bowen-content">@<a href="#">ZhangCheng</a>You are just 25, you can be anyone you want to.</p>',
			        '<p class="time">3 days ago</p>',
			        '<div class="bottom"></div>',
			      '</div>',
			      '<div class="pw-bowen">',
			        '<div class="top"></div>',
			        '<p class="bowen-content">@<a href="#">ZhangCheng</a>Remember your dream all the time.</p>',
			        '<p class="time">4 days ago</p>',
			        '<div class="bottom"></div>',
			      '</div>',
			    '</div>'
			)
		});
		
		this.firstPanel = Ext.create("Ext.panel.Panel",{
			layout:{
				type: "vbox"
			},
			width: 200,
			items:[this.infoPanel, this.weiboPanel]
		});
		
		this.idPhoto = Ext.create("Ext.Img",{
			width: 200,
			cls: 'pw-idphoto',
			bind: {
				src: 'resources/images/user/idphoto.jpg'
				//src: 'resources/profileImage/currentUser.picture}' //mastering page 200
			}
		});
		
		this.readingPanel = Ext.create("Ext.panel.Panel",{
			width: 200,
			height: 350,  // fix bug
			data:{},
			tpl: new Ext.XTemplate(
			    '<div class="pw-readingpanel">',
			      '<h2>Reading Now...</h2>',
			        '<img src= resources/images/app/reading3.png/>' 
			
			)
		})
		
		this.imgContainer=Ext.create("Ext.panel.Panel",{
			height: 650,
			layout:{
				type: "vbox"
			},
			items:[this.idPhoto]
		});
		
		this.secondPanel = Ext.create("Ext.panel.Panel",{
			height: 1150,
			layout:{
				type: "vbox"
			},
			items: [this.imgContainer, this.readingPanel]
		});
		
		this.titlePanel = Ext.create("Ext.panel.Panel",{
			html: '<h1 class="pw-title">Keep hungry, Keep foolish</h1>'
		});
		
		this.eventsPanel = Ext.create("Ext.panel.Panel",{
			width: 300,
			data:{},
			tpl: new Ext.XTemplate(
			    '<div class = "pw-eventspanel">',
			      '<h2>Events</h2>',
			      '<div class="event-info">',
			        '<h3>HoloLens Released!!!</h3>',
			        '<p class="content">dsa fasdf asdfs adfsa dfa sdf dfa sfs af asfa sdf ewa rfd wea4r' +
			          'asd fff qqqq qqq qqqq qqaa aa aaaa ags dgvse rder' +
			          'asdfweqarwweqr' +
			        '</p>',
			      '</div>',
			    '</div>'
			)
			
		})
		
		this.myblogsPanel = Ext.create("Ext.panel.Panel",{
			width: 300,
			data:{},
			tpl: new Ext.XTemplate(
			    '<div class="pw-myblogspanel">',
			      '<h2>My blog</h2>',
			      '<div class="blog-info">',
			        '<time datetime="2016-02-25">',
			        '<span>25</span>',
			        '02.2016',
			        '</time>',
			        '<h3>',
			          '<a href="#">How to create the view of Extjs App</a>',
			        '</h3>',
			      '</div>',
			      
			      '<div class="blog-info">',
			        '<time datetime="2016-02-25">',
			        '<span>25</span>',
			        '02.2016',
			        '</time>',
			        '<h3>',
			          '<a href="#">Marketing plan for Love Snaker V</a>',
			        '</h3>',
			      '</div>',
			          
			      '<div class="blog-info">',
			        '<time datetime="2016-02-25">',
			        '<span>25</span>',
			        '02.2016',
			        '</time>',
			        '<h3>',
			          '<a href="#">Data mining - improved k-means algrithm</a>',
			        '</h3>',
			      '</div>',
			    '</div>'
			)
		})
		
		this.subThirdPanel = Ext.create("Ext.panel.Panel",{
			layout:{
				type: "hbox"
			},
			items: [this.eventsPanel, this.myblogsPanel]
		});
		
		this.thirdPanel = Ext.create("Ext.panel.Panel",{
			height: 1200,
			cls: 'pw-thirdpanel',
			layout:{
				type: "vbox"
			},
			items: [this.titlePanel, this.subThirdPanel]
		});
		
		this.introPanel = Ext.create("Ext.panel.Panel",{
			layout:{
				type: "hbox"
			},
			items:[this.firstPanel, this.secondPanel,this.thirdPanel]
		});

		this.items = [this.introPanel];
		
		this.callParent();		
	}

});
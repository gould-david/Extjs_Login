Ext.onReady(function(){
	var _tagPanel = Ext.create('Ext.tab.Panel',{
		//通过items添加标签标签页示例
		title:'Ext.tab.Panel示例',
		frame:true,
		height:300,
		width:500,
		activeTab:0,
		//renderTo:Ext.getBody(),
		items:[
			{
				title:'新建发文1',
				html:'发文内容1'
			}
		],
		buttons:[
			{
				text:'添加新的标签页',
				handler:addTabPage
			}
		]
	});
	Ext.create('Ext.container.Viewport',{
		layout:'border',
		items:[
			{
				title:'顶部',
				height:300,
				region:'north'
			},{
				title:'左部',
				width:200,
				region:'west',
				layout:'accordion',
				items:[
					{
						title:'嵌套面板1',
						html:'说明一'
						},{
						title:'嵌套面板2',
						html:'说明二'
					},{
						title:'嵌套面板3',
						html:'说明三'
					}
						]
			},{
				id:'centerId',
				title:'中部',
				region:'center',
				items:[
				  _tagPanel,//调用上方的组件
					{
						title:'新建发文XX',
						html:'发文内容XX',
						height:200,
						width:500
					}
				]
			}
		]
	});
	
	function addTabPage(){
		var _index = _tagPanel.items.length + 1 ;//获取当前标签数的最大值 +１
		//var _html = _tagPanel.body.dom.innerHTML;//通过Body获取HTML值，
							//但这样获取出来的是带有HTML语言的内容。例如：<div></div>什么的
		var _tabpage = _tagPanel.add({//添加一个tag页
			title:'tag标签页'+_index,
			html:"tag标签页"+_index,
			closable:true
		});
		_tagPanel.setActiveTab(_tabpage);
	}
	
})
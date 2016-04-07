Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'面板头部',
		tbar:['顶部工具栏(top toolbars)'],
		bbar:['底部工具栏(bottom toolbars)'],
		height:220,
		width:300,
		frame:true,
		renderTo:'form',
		bodyPadding:5,
		bodyStyle:'background-colol:#FFFFFF',
		html:'面板体',
		tools:[
			{id:'toggle'},
			{id:'close'},
			{id:'maximize'}
		],
		buttons:[
			{text:'面板底部'}
		]
		
	})
	
})
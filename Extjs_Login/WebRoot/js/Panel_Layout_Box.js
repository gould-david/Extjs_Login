Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Box布局',
		layout:{
			type:'hbox',//横向布局，另一种布局方式是Vbox Vertical,HBox Horizon
			align:'stretch'//子元素垂直拉伸充满容器高度
		},
		height:300,
		width:400,
		frame:true,
		renderTo:'form',
		items:[
			{
				title:'子面板1',
				html:'内容一',
				flex:2
			},{
				title:'子面板2',
				html:'内容二',
				flex:2
			},
			{
				title:'子面板3',
				html:'内容三',
				flex:6
			}
		]
		
	})
	
})
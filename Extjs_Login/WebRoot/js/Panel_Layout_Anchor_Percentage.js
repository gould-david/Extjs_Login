Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'anchor 百分比布局',
		width:300,
		height:200,
		renderTo:'form',
		bodyStyle:'background-color:#FF00F0',
		layout:'anchor',
		items:[
			{
				anchor:'70% 50%',//右边  下边
				title:'子面板'
			}
		]
		
	})
	
})
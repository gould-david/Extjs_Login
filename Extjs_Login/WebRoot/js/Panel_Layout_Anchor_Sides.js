Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Anchor Sides布局',
		frame:true,
		width:300,
		height:200,
		layout:'anchor',
		renderTo:'form',
		items:[
			{
				anchor:'r b',//水平上是 靠右   竖直上是靠底
				title:'子面板',
				width:200,
				height:150
			}
		]
	})
	
})
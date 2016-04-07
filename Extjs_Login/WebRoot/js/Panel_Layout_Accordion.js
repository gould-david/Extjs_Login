Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Ext.layout.container.accordion 示例',
		bodyPadding:5,
		renderTo:'form',
		bodyStyle:'background-color:#FFF000',
		layout:'accordion',
		height:200,
		width:300,
		frame:true,
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
	})
	
})
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Table布局示例',
		frame:true,
		width:500,
		height:300,
		bodyStyle:'background-color:#FFFF00',
		renderTo:'form',
		collapsible:true,
		layout:'border',
		defaults:{
			collapsible:true
		},
		items:[
			{
				title:'north Panel 北',
				html:'上',
				region:'north',
				height:50//region为north或south时，必须指定height
			},{
				title:'south Panel 南',
				html:'下',
				region:'south',
				height:50//region为north或south时，必须指定height
			},{
				title:'west Panel 西',
				html:'左',
				region:'west',
				width:100//region为east或west时，必须指定width
			},{
				title:'east Panel 东',
				html:'右',
				region:'east',
				width:100//region为east或west时，必须指定width
			},{
				title:'Center 中部',
				html:'中部',
				region:'center'
			}
		]
	})
	
})
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'CheckboxGroup--Column--Width示例',
		width:300,
		height:200,
		frame:true,
		bodyStyle:'background-color:#00FFFF',
		layout:'column',
		defaults:
			{
				bodyStyle:'background-color:#FF00FF',
				height:80,
				frame:true
			},
		renderTo:'form',
		items:[
			{
				title:'面板一',
				html:'内容一',
				width:100//指定列宽
			},{
				title:'面板二',
				html:'内容二',
				width:150,//指定列宽
				height:90
			}
		]
		
		
		
	})
	
})
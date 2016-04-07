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
		items:[{
				title:'面板零',
				html:'内容零',
				Width:123//指定列宽为123像素 剩余的根据ColumnWidth指定的数字进行划分
			},{
				title:'面板一',
				html:'内容一',
				columnWidth:.3//指定占据的百分比  .3  表示 占据30%
			},{
				title:'面板二',
				html:'内容二',
				columnWidth:.6//指定占据的百分比  .6  表示 占据60%
			}
		]
		
		
		
	})
	
})
Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'加载本地资源 contentEl',
		frame:true,
		bodyStyle:'background-color:#000FFF',
		bodyPadding:5,
		collapsible:true,
		autoScroll:true,
		renderTo:'form',
		width:300,
		height:200,
		contentEl:'contentEl_ID'
	})
	
})
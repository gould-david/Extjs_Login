Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
	title:'Ext.layout.container.Auto布局实例',
	frame:true,
	width:200,
	height:150,
	renderTo:Ext.getBody(),
	bodyPadding:5,
	bodyStyle:'background-color:#FFFF00',
	collapsible:true,
	autoScroll:true,
	layout:'auto',
	items:[
		{
			title:'嵌套面板1',
			html:'面板一'
		},{
			title:'嵌套面板2',
			html:'面板二'
		}
	]	
	})
	
	
})
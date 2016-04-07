Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'面板加载远程页面 ---autoLoad',
		height:200,
		width:300,
		frame:true,
		renderTo:'form',
		autoScroll:true,
		collapsible:true,//允许展开和收缩
		bodyPadding:5,
		autoLoad:'html/page1.html',
		bodyStyle:'background-color:#F0F0F0'
	})
	
})
Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Display示例',
		width:500,
		height:200,
		frame:true,
		renderTo:Ext.getBody(),
		bodyStyle:'padding:5,5,5,5',
		items:[{
			fieldLabel:'展现字段',
			xtype:'displayfield',
			value:'显示的内容',
			labelWidth:70,
			labelSeparator:':'
		}]
	});
})
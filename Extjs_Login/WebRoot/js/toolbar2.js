Ext.onReady(function(){
	var toolbar = new Ext.toolbar.Toolbar({
		renderTo:'ToolBar',
		width:500
	});
	toolbar.add(
	{text:'新建'},
	{text:'打开'},
	{text:'编辑'},
	{text:'保存'},
	'-',
	{
		xtype:'textfield',
		hideLabel:false,
		width:150
	},
	'->',
	'<a href=#>链接</a>',
	{
		xtype:'tbspacer',
		width:50
	},
	'静态文本'
	);
});
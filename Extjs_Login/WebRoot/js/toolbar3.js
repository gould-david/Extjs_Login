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
	'-'
	);
	var enableBtn = new Ext.Button({
		text:'解锁',
		renderTo:Ext.getBody(),
		width:100
	});
	var disableBtn = new Ext.Button({
		text:'加锁',
		renderTo:Ext.getBody(),
		width:100
	});
	
	enableBtn.on('click',function(){
		toolbar.enable();
	});
	disableBtn.on('click',function(){
		toolbar.disable();
	});
});
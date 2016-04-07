Ext.onReady(function(){
	var toolBar = new Ext.toolbar.Toolbar({
		renderTo:'ToolBar',
		width:300
	});
	toolBar.add([
	{
		text:'新建',handler:onButtonClick,iconCls:'newIcon'
	},
	{
		text:'打开',handler:onButtonClick,iconCls:'openIcon'
	},
	{
		text:'保存',handler:onButtonClick,iconCls:'saveIcon'
	}
	]);
	function onButtonClick(id){
		alert(id.text);
	}
});
Ext.onReady(function(){
	var toolBar = new Ext.toolbar.Toolbar({
		renderTo:'ToolBar',
		width:300
	});
	
	var themeMenu = new Ext.menu.Menu({
		ignoreParentClicks:true,
		items:[
			{	text:'主题颜色',
				handler:clickButton,
				menu:new Ext.menu.Menu({
					items:[
						{text:'红色主题',group:'theme',checkHandler:clickButton,checked:true},
						{text:'绿色主题',group:'theme',checkHandler:clickButton,checked:false},
						{text:'粉色主题',group:'theme',checkHandler:clickButton,checked:false},
						{text:'经典主题',group:'theme',checkHandler:clickButton,checked:false},
						{text:'与上面的不在同一分组',group:'otherGroup',checkHandler:clickButton,checked:false},
						{text:'不含有group的check属性',checkHandler:clickButton,checked:false,id:'NotResolveGroupButton'}
					]}
		
			
			)}
		]
	});
	
	var controlManager = new Ext.menu.Menu({
		items:[
			{text:'是否启用',
			checked:false}
		]
	});
	function clickButton(id){
		alert(id.id)
	}
	toolBar.add(
	{text:'风格选择',menu:themeMenu},
	{text:'管理',menu:controlManager}
	);
});
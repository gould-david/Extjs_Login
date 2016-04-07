Ext.onReady(function(){
	var toolBar = new Ext.toolbar.Toolbar({
		renderTo:'ToolBar',
		width:300
	});
	var fileMenu = new Ext.menu.Menu({
		shadow:false,
		allowOtherMenus:true,
		items:[
			new Ext.menu.Item({
				text:'新建',
				handler:onMenuItem
			}),
			{text:'打开',handler:onMenuItem},
			{text:'关闭',handler:onMenuItem}
		]
	});
	
	var handlerMenu = new Ext.menu.Menu({
		ignoreParentClicks:true,//控制此层的父类组件单击事件失效，方便点击下一级菜单
		shadow:'drop',
		plain:true,
		allowOtherMenus:true,
		items:[
			new Ext.menu.Item({
				text:'复制',
				handler:onMenuItem
			}),
			new Ext.menu.Separator(),
			{text:'粘贴',handler:onMenuItem},
			{text:'剪贴',handler:onMenuItem},
			{text:'插入',
				menu:new Ext.menu.Menu({
					ignoreParentClicks:true,
					items:[
						{text:'插入图片',handler:onMenuItem},
						{text:'插入剪切画',handler:onMenuItem},
						{text:'插入文件',
							menu:new Ext.menu.Menu({
								items:[
									{text:'本地文件',handler:onMenuItem},
									{text:'在线文件',handler:onMenuItem}
								]
							})
						}
						]
				})
			}
			
		]
		
	});
	var otherTool = new Ext.menu.Menu({
		ignoreParentClicks:true,//控制此层的父类组件单击事件失效，方便点击下一级菜单
		shadow:'drop',
		plain:true,
		allowOtherMenus:true,
		items:[
			{text:'输入表单',xtype:'textfield',width:100,hideLable:true},
			{text:'颜色选择器',menu: new Ext.menu.ColorPicker()},
			{xtype:'datepicker'},
			new Ext.ButtonGroup({
				columns:3,
				title:'按钮组',
				items:[
					{text:'用户管理',scale:'large',colspan:3,width:170},
					{text:'打开',scale:'medium',colspan:3,iconCls:'newIcon',iconAlign:'top',width:170}
				]
			})
		]
	});
	toolBar.add(
	{text:'文件',menu:fileMenu},
	{text:'操作',menu:handlerMenu},
	{text:'其他工具',menu:otherTool}
	);
	function onMenuItem(items){
		alert(items.text);
	}
});
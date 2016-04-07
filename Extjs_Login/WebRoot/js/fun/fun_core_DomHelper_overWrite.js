Ext.onReady(function(){
	var panel = Ext.create('Ext.Panel',{
		title:'overWrite示例',
		frame:true,
		width:600,
		height:450,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:yellow;width:300px;height:200px;font-size:15px'>测试core.DomHelper.overwrite将现有文本进行替换</div>",
		buttons:[
			{
				text:'点击触发事件',
				handler:function(){
					Ext.core.DomHelper.overwrite(Ext.get('div1'),"新文本新文本新文本新文本新文本新文本新文本新文本");
					Ext.core.DomHelper.applyStyles(Ext.get('div1'),"font-size:28px;color:red;font-weight:bold;");
				}
			}
		]
	});
	
})
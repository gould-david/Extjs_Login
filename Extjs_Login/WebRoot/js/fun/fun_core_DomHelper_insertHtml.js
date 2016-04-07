Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.core.DomHelper.insertAfter',
		width:300,
		height:200,
		renderTo:Ext.getBody(),
		frame:true,
		html:"<div id='div1'>原DIV1的内容</div>",
		buttons:[
			{
				text:'触发插入效果',
				handler:function(){
					Ext.core.DomHelper.insertHtml("afterBegin",document.getElementById("div1"),"<h>新插入的HTMl文本</h>");
				}
			}
		]
	})
	
})
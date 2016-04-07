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
				text:'出发插入效果',
				handler:function(){
					Ext.core.DomHelper.insertFirst(Ext.get('div1'),{
						tag:'li',
						id:'items2',
						html:'<div>被插入的DIV内容</div>'
					},false
					);
				}
			}
		]
	})
	
})
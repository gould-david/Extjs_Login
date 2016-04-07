Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'将某节点追加到另外一个节点中',
		frame:true,
		id:'_panel',
		width:500,
		height:400,
		collapsible:true,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:yellow;width:450px;height:380px;font-size:18px'>" +
				"将某节点追加到另外一个节点上，追加后根据参数的不同，会有两种方式，<br/>" +
				"当参数为true时，一种是追加后形成的节点是HTML Element" +
				"<br/>当参数为false时，另一种追加后形成的是Dom ELement" +
				"</div>"
	});
	
	Ext.core.DomHelper.append(Ext.get("div1"),"<br/><br/><br/><font style='font-size:25px'>追加的文本</font>",true);
	
})
Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.core.domhelper.applystyles示例',
		width:300,
		height:200,
		renderTo:'sub1',
		html:"<div id='div1' style='height:160px;padding:5px;background-color:green'>DIV中的文字<div id='div2' style='padding:5px;background-color:blue;width:100px'>DIV嵌套</div></div>"
	});
	
	Ext.core.DomHelper.applyStyles(Ext.get("div1"),"font-size:18px;color:red;font-weight:bold;");
	
	//检测outerHTML是什么
	
	var str = Ext.get("div1").dom.innerHTML;
	
	var str2 = Ext.get("div1").dom.outerHTML;
	
	Ext.Msg.alert('提示',str);
	
})
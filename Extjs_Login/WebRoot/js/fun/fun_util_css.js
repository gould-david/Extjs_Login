Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.util.css示例',
		width:300,
		renderTo:Ext.getBody(),
		html:"<div style='height:80px;padding:5px;' class='myclass'>div内容部分</div>"
	});
	
	Ext.util.CSS.createStyleSheet(".myclass{color:blue;font-weight:bold}","the");
	
	var cls = Ext.util.CSS.getRule(".myclass",'true');
	
	Ext.Msg.alert('提示',cls.style.color);
	
	
	//下面设置移除样式
	var btn = new Ext.Button({
		text:'移除样式',
		handler:removeCls
	})
	
	function removeCls(){
		Ext.util.CSS.removeStyleSheet("the");
	}
	
	btn.render("sub3");
})
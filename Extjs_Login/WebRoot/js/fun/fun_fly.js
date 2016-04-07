Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'fly示例',
		height:600,
		width:400,
		frame:true,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:blue;height:200px;width:200px;'>DIV1内容</div>" +
		"<div id='div2' style='background-color:red;height:200px;width:200px;'>DIV2内容</div>"
	});
	
	//Ext.get('div1').setHeight(400,true);
	
	var _fly = Ext.fly('div1');
	
	_fly.setWidth(100,true);
	
	//但这个fly如果被重新指向了其他的id元素，之前的变量也就作废了，也就指向了新的id组件
	
	Ext.fly('div2');
	
	_fly.setHeight(400,true);
	
})
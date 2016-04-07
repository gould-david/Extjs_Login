Ext.onReady(function(){
	var person = {name:'张全',sex:'male'};
	var panel = new Ext.panel.Panel({
		title:'Encode将Json对象转换成字符串',
		renderTo:Ext.getBody(),
		width:300,
		html:"<div id='div1' style='height:20px'>点击触发弹框事件</div>"
	});
	
	var e1 = Ext.select(["div1"],true);
	
	e1.on('click',Alert);
	
	function Alert(){
		Ext.Msg.alert('提示',Ext.encode(person));
	}
	
})
Ext.onReady(function(){
	var _panel = new Ext.panel.Panel({
		title:'示例',
		frame:true,
		id:'_panel',
		width:400,
		height:300,
		renderTo:Ext.getBody(),
		html:"<div id = 'div1' property1='pro1' style='height:200px;padding:5px;font-size:11px;background-color:yellow'>id为Div1</div>"
	});
	var _comp = Ext.getCmp('_panel');
	var _get = Ext.get('_panel');
	Ext.Msg.alert('提示',"获取的是组件的类型"+_comp.getXType());
	//Ext.Msg.alert('提示',"获取的是组件的内容"+_get.dom.innerHTML);
})
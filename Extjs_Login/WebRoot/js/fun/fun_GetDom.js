Ext.onReady(function(){
	var _panel = new Ext.panel.Panel({
		title:'GetDom示例',
		frame:true,
		renderTo:'sub1',
		id:'panel1',
		width:300,
		html:"<div id='div1' property1='pro1' style='height:300px;padding:5px;font-size:11px;'>" +
				"实例化一个ID为panel1的panel组件，且这个组件内部包含一个id为DIV1的div" +
				"</div>",
		buttons:[
			{
				text:'按钮',
				handler:_click1
			},{
				text:'提示',
				handler:_click2
			}
		]
				
	});
	
	var domp = Ext.getDom('panel1');
	
	
	function _click1(){
		Ext.get("div1").dom.innerHTML = '修改后的内容';
	}
	function _click2(){
		Ext.Msg.alert('提示',"通过Ext.getDom取得ID,ID:"+domp.id
			+"<br/>通过组件(Component)的Element取得dom属性"+_panel.el.dom.id
			+"<br/>Ext.Get方法的特点："+"<br/>"
			+"获取html中的div的内容----"+Ext.get("div1").dom.innerHTML
			+"<br/>获取html中的div的id----"+Ext.get("div1").id
	);
	}
})
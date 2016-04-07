Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'判断类型示例',
		frame:true,
		width:300,
		id:'_panel',
		height:200,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:blue;width:200px;height:150px'>这是一个DIV</div>"
	});
	
	var e1 = Ext.select(["div1"],true);
	
	var a = [];
	
	var el = panel.el;
	
	var dom = el.dom;
	
	var dom2 = Ext.getDom("_panel");
	
	var cmp = Ext.get("_panel");
	
	e1.on('click',function(){
		Ext.Msg.alert('提示',
			'panel组件的类型是'+Ext.typeOf(panel)+'<br/>'+'<br/>'+
			'div组件的类型是'+Ext.typeOf(e1)+'<br/>'+'<br/>'+
			'panel组件的Element属性的类型是'+Ext.typeOf(el)+'<br/>'+'<br/>'+
			'panel组件的dom属性的类型是'+Ext.typeOf(dom)+'<br/>'+'<br/>'+
			'panel组件的dom2属性的类型是'+Ext.typeOf(dom2)+'<br/>'+'<br/>'+
			'panel组件的类型是'+Ext.typeOf(cmp)+'<br/>'+'<br/>'+
			'panel组件的html属性的类型是'+Ext.typeOf(dom.innerHTML)+'<br/>'
			
		)
	});
	
})
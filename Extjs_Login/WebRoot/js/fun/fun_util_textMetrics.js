Ext.onReady(function(){
	var div1 = Ext.get('div1');
	var div1Width = div1.getTextWidth();
	//var div1Height = div1.getTextHeight();
	alert("div1.getTextWidth():"+div1Width );
	
	
	var div2 = Ext.fly('div2');
	var size = Ext.util.TextMetrics.measure(div2,div2.dom.innerHTML);
	alert('width:'+size.width+'height'+size.height);
	
	//多行文本测试，相比于普通的，需要添加一个固定的宽度
	
	var div3 = Ext.fly('div3');
	var size = Ext.util.TextMetrics.measure(div3,div3.dom.innerHTML,108);
	alert('多行文本width:'+size.width+'height'+size.height);
	
	
	var metrics = new Ext.util.TextMetrics('div2');
	
	metrics.setFixedWidth(25);
	
	/*var div3Size = metrics.getSize("测试块状化文本规格" +
			"测试块状化文本规格测试" +
			"块状化文本规格");*/
	
	var div3Size = metrics.getSize(div2.dom.innerHTML);
	
	Ext.Msg.alert('提示',Ext.String.format("width:{0}px; \t height:{1}",div3Size.width,div3Size.height))
})
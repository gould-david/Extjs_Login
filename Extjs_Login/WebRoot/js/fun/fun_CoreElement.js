Ext.onReady(function(){
	function fn1(){
		Ext.Msg.alert("提示","按下了Ctrl+C");
	}
	var e1 = Ext.get("the-id");
	var append = Ext.get("append-id");
	e1.addCls("test");//这个添加的是样式表,且仅支持类选择器（class）
					  //而不是样式文件
	append.addCls("append");
	append.setWidth(600,true);//将宽度改成600，且增加一个加载的动画效果
	e1.focus();//将焦点移动到e1上
	e1.addClsOnFocus("focus");
	e1.addClsOnOver("focus");//鼠标移入时字体加斜
	e1.addClsOnClick("click");//鼠标点击时触发
	e1.addKeyMap({key : "c",ctrl : true,fn:fn1,scope:e1});//暂无效果
	e1.addKeyListener({key:"c",ctrl:true},fn1,e1);//暂无效果
	
	function callAppend(){
		Ext.Msg.alert("提示","将append-id元素内容加载至新的元素中，且该元素的宽度是"+Ext.get("append-id").getComputedWidth());
		//此处返回的宽度是真实宽度，即width+border+padding
		alert(Ext.get("append-id").dom.innerHTML);
		//获取内容
		
		Ext.get("the-id").appendTo(Ext.get("append-id"));
	}
	
	Ext.create('Ext.Button',{
		text:'点击',
		renderTo:'btn',
		handler:callAppend
	})
})
Ext.onReady(function(){
	//Ext.msg.alert这个是异步的，不影响之后的代码运行
	Ext.Msg.alert('标题','<font color=red size=8>hello world</font>',callback);
	//alert("测试异步");
	//为alert设置回调函数
	function callback(id){
		alert('点击的是'+id)
	}
	
});


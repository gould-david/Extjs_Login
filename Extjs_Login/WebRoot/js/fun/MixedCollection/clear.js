Ext.onReady(function(){
	var item = new Ext.util.MixedCollection();
	
	var array = [];
	
	array.push({name:'a'});

	array.push({name:'b',space:'empty'});
	
	item.addAll(array);
	
	var b_item = item.length;
	
	item.clear();
	
	Ext.Msg.alert('提示','加入数组之前MIXEDCollection的对象个数是:'+b_item+"<br/>"+
		"移除集合中的对象后"+item.length+"<br/>"
	)
	
})
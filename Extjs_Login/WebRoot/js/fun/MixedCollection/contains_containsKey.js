Ext.onReady(function(){
	var item1 = new Ext.util.MixedCollection();
	
	var param = {name:'aaa'};
	
	item1.add('key1',param);
	
	Ext.Msg.alert('提示',"利用contains进行判断集合中是否存在某个对象，且是利用对象的id进行判断"+
		item1.contains(param)+"<br/>"+
		"利用containsKey进行判断集合中是否存在某个对象，且是利用对象的key值进行判断"+
		item1.containsKey("key1")+"<br/>"
		+"对象的ID值是多少"+param
	)
	
})
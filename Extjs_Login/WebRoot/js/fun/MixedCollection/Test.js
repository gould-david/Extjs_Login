Ext.onReady(function(){
	var item = new Ext.util.MixedCollection();
	
	item.add('key1',{name:'zq'});
	item.add('key2',{name:'zzq'});
	item.add('key3',[{name:'zsq'},{sex:'male'}]);
	var obj = {name:'zhangsan'};
	item.add('key4',obj);
	
	var p_key = item.getKey(obj);
	
	item.remove(obj);
	
	//item.removeAtKey('key3');移除key为key3的对象
	//item.removeAt(2);移除坐标为..的对象
	
	Ext.Msg.alert('提示',"对象的个数是"+item.getCount()+"<br/>"+item.length+"<br/>"+
		"获取obj对象的key值"+p_key+"<br/>"+
		"获取指定对象的下标是"+item.indexOf(obj)+"<br/>"+
		"根据索引获取指定对象的下标"+item.indexOfKey("key1")+"<br/>"
		//"给出key值返回对象"+item.item(2)
		//"给出key值返回对象"+item.key(2)
	);
		
})
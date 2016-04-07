Ext.onReady(function(){
	var item = new Ext.util.MixedCollection();
	
	item.addAll([{name:'a',space:'empty'},{name:'b'}],[{name:'c'}]);
	
	var _clone = item.clone();
	
	Ext.Msg.alert('提示','完成clone()后的对象'+_clone.length);
	
})
Ext.onReady(function(){
	var item1 = new Ext.util.MixedCollection();
	var item2 = new Ext.util.MixedCollection();
	
	var a = {name:'a'};
	
	var b = {name:'b'};
	
	item1.add('01',a);
	item1.add('02',b);
	item1.add('03',a);
	
	item2.add('01',a);
	item2.add('01',b);
	
	Ext.Msg.alert('提示','item1关联的对象个数是:'+item1.length+"<br/>"+
		"item2关联的对象个数是:"+item2.length
	);
	
})
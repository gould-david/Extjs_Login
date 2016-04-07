Ext.onReady(function(){
	var item = new Ext.util.MixedCollection();
	
	item.add('key1',{sex:'male'});
	
	var obj = {name:'zq'};
	
	item.add('key2',obj);
	
	Ext.Msg.alert('提示','取得集合中的第一个对象的sex值是'+item.first().sex+
	"<br/>"+
	'取得key值为key1的对象的Name为'+
		item.get('key2').name
	);
	
})
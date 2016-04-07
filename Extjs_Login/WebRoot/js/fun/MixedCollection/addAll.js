Ext.onReady(function(){
	var item = new Ext.util.MixedCollection();
	
	var b_item = item.length;
	
	var array = [];
	
	array.push({name:'a'});

	array.push({name:'b',space:'empty'});
	
	item.addAll(array);
	
	var item2 = new Ext.util.MixedCollection();
	
	var array2 = [];
	
	array2.push({name:'c'},{name:'d'});

	array2.push({name:'e'});
	
	item2.add(array2);
	
	Ext.Msg.alert('提示','加入数组之前MIXEDCollection的对象个数是:'+b_item+"<br/>"+
		"加入数组之后MIXEDCollection的对象个数是:"+item.length+"<br/>"+
		"同样是加入数组，是否能通过add的方法进行添加，而不用addAll:"+item2.length+"<br/>"
	)
	
})
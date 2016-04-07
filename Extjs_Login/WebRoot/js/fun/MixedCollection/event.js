Ext.onReady(function(){
	 var item = new Ext.util.MixedCollection();
	 
	 /*item.on('add',function(index,object,key){
	 	Ext.Msg.alert('提示','当前有对象加入,index为'+index+'该对象的name是'+object.name+'对象的key值'+key+'<br/>长度为'+item.length);
	 });
	 */
	 item.add('objectIndex',{name:'张全'});
	 var obj = {name:'zhangsan',sex:'male'};
	 //item.add('key2',obj);//添加对象时触发此事件
	 
	 item.on('clear',function(){
	 	Ext.Msg.alert('提示','对象被全部移除');
	 });
	 
	 item.on('remove',function(object,key){
	 	Ext.Msg.alert('提示','被移除的对象key为'+key+'其name为'+object.name);
	 });
	 
	 //item.clear();移除对象时触发
	 
	 //item.removeAtKey('objectIndex');移除指定对象后触发
	 
	 item.on('replace',function(key,obj,nobj){
	 	Ext.Msg.alert('提示','key为'+key+'name为'+obj.name+'被替换，替换后的name为'+nobj.name);
	 })
	 
	 item.replace('objectIndex',{name:'lisi'});
})
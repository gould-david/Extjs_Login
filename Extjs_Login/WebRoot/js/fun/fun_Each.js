Ext.onReady(function(){
	Ext.create('Ext.Panel',{
		title:'Each的示例',
		frame:true,
		width:200,
		height:200,
		renderTo:"sub1"
	})
	var _array = [];
	var i;
	for(i=0;i<10;i++){
		_array.push(i);
	}
	function f1(item,index,allItems){
		if(item>5){return false}
		else{
			allItems[index] = item+"——st";
		}
	}
	
	function f2(item,index,allItems){
		if(index>0){
			return false
		}
		Ext.Msg.alert('提示',allItems);
	}
	Ext.each(_array,f1);
	Ext.each(_array,f2);
})
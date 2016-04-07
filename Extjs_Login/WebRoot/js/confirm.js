Ext.onReady(function(){
	Ext.MessageBox.confirm('确认框','确认框内容',callback);
	function callback(id){
		alert('单击的是'+id);
	}
});
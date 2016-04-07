Ext.onReady(function(){
	Ext.MessageBox.prompt('Prompt','提示',callback,this,10,'默认值');
	function callback(id,msg){
		alert('Msg'+msg);
	}
});
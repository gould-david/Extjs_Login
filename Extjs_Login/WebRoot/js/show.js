Ext.onReady(function(){
	Ext.MessageBox.show({
		title:'标题',
		msg:'this is content',
		modal:true,
		value:'默认',
		fn:function(id,msg){
			alert(id+'内容是'+msg);
		},
		//progress:true,
		//progressText:'进度条',
		//wait:true,
		prompt:true,
		multiline:true,
		buttons:Ext.Msg.YESNO,
		icon:Ext.Msg.INFO
	});
	
});
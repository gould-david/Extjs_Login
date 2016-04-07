Ext.onReady(function(){
	//设置按钮
	Ext.MessageBox.buttonText.ok = '按钮一';
	Ext.MessageBox.buttonText.yes = '按钮二';
	Ext.MessageBox.buttonText.no = '按钮三';
	Ext.MessageBox.buttonText.cancel = '按钮四';
	Ext.MessageBox.show({
		title:'标题',
		msg:'内容',
		modal:true,
		buttons:Ext.Msg.YESNOCANCEL,
		fn:function(id){
			Ext.MessageBox.alert('回调函数',id);
		}
	});
});
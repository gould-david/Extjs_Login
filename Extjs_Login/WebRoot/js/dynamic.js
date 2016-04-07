Ext.onReady(function(){
	Ext.MessageBox.buttonText.yes = '好的';
	var msgBox = Ext.MessageBox.show({
		title:'动态show组件',
		msg:'点击后开始',
		modal:true,
		buttons:Ext.Msg.YES,
		fn:function(){
			Ext.TaskManager.stop(task);
		}
	});
	var task = {
		run:function(){
			msgBox.updateText('时间：'+Ext.util.Format.date(new Date(),'Y-m-d h:i:s'));	
		},
		interval:2000	
	}
	Ext.TaskManager.start(task);
});
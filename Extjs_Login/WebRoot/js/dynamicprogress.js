Ext.onReady(function(){
	var msgBox = Ext.MessageBox.show({
		title:'标题',
		msg:'出现吧内容',
		modal:true,
		buttons:Ext.Msg.CANCEL,
		fn:function(id){
			alert(id);
			Ext.TaskManager.stop();
		},
		progress:true
	});
	var count = 0;
	var percentage = 0;
	var progressText = '';
	var task = {
		run:function(){
			count++;
			percentage = count/10;
			progressText = '当前进度:'+percentage*100 +'%';
			msgBox.updateProgress(percentage,progressText,'我才是内容');
			if(count>=10){
				Ext.TaskManager.stop(task);
				msgBox.hide();
			}
		},
		interval:1000
	};
	
	Ext.TaskManager.start(task);
});
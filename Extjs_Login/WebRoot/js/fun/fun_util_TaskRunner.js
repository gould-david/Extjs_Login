Ext.onReady(function(){
	var task1 = new Ext.util.TaskRunner();
	
	var task = {
		run:function(){
			Ext.Msg.alert('提示','线程已经运行！重复5次，但在10秒后会停止');
		},
		duration:20000,//执行线程前先停止的时间,可当成持续时间
		interval:10000,//任务连续运行的时间
		repeat:5
	}
	task1.start(task);
	
})
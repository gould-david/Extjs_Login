Ext.onReady(function(){
	var ProgressBar = new Ext.ProgressBar({
		width:300,
		renderTo:'ProgressBar'
	});
	var count = 0;
	var percentage = 0;
	var progressText = '';
	Ext.TaskManager.start({
		run:function(){
			count++;
			if(count>=10){
				Ext.TaskManager.stop(this);
			}
			percentage = count/10;
			progressText = percentage *100 +'%';
			ProgressBar.updateProgress(percentage,progressText,true);
		},
		interval:1000

	});
});
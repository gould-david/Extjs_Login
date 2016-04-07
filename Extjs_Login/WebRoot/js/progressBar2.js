Ext.onReady(function(){
	var progressBar = new Ext.ProgressBar({
		text:'进度条',
		width:400,
		renderTo:'ProgressBar'
	});
	progressBar.wait({
		duration:10000,//持续时间
		interval:1000,//1秒更一次
		increment:15,//进度条分10次更新
		text:'进度条上的文字',
		scope:this,
		fn:function(){
			Ext.MessageBox.alert('标题','自动进度条完毕，主要用于长时间的进行载入，避免用户做其他操作');
		}
	});
});
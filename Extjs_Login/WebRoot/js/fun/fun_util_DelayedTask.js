Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'延迟任务示例',
		width:300,
		height:200,
		frame:true,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:blue'>DIV1的内容</div>"
		
	});
	var time=0;
	function taskMission(time){
		var task = new Ext.util.DelayedTask(function(){
			Ext.Msg.alert('提示',time+'秒后完成了加载')
		});
		//function(){Ext.Msg.alert('提示',time+"秒后完成了加载")}
		task.delay(time);
	};

	//使用Element操作dom的动作，属性等
	Ext.get('div1').on('click',taskMission(5000));
})
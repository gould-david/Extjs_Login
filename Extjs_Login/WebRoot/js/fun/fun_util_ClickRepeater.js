Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'时间触发',
		html:"<div id='div1'>点击进行触发</div>",
		height:200,
		width:300,
		renderTo:Ext.getBody()
	});
	
	var cl = new Ext.util.ClickRepeater(Ext.get('div1'),{
		delay:3000,
		interval:3500,
		stopDefault:true,
		pressedCls:'focus',
		handler:function(){
			Ext.Msg.alert('提示','触发');
		}
	});
})
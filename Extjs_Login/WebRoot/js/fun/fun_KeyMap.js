Ext.onReady(function(){
	var panel = Ext.create('Ext.Panel',{
		title:'KeyNav示例',
		width:300,
		height:400,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='height:300px;width:200px;background-color:blue'>这是div1的内容</div>",
		buttons:[
			{
				text:'激活键盘',
				handler:active
			},{
				text:'失效键盘',
				handler:stop
			}
			
		]
	})
	
	//获取组件
	var el = Ext.get('div1');
	
	/*var config = {
		key:Ext.EventObject.LEFT,
		fn:Ext.Msg.alert("左"),
		scope:el
	}*/
	var nv = new Ext.KeyMap(el,{
		key:Ext.EventObject.LEFT,
		fn:function(){
			Ext.Msg.alert('提示',"左");
		},
		scope:el
	});
	
	nv.addBinding(
		{
			key:'abc',
			ctrl:true,
			fn:function(){
				Ext.Msg.alert('提示',"同时按下了ctrl和abc");
			},
			scope:this
		}
	);
	function active(){
		nv.enable();
	}
	function stop(){
		nv.disable();
	}
		
	
})
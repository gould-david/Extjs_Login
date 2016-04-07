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
	
	var config = {
		"left":function(e){
			alert("左");
		},
		"right":function(e){
			alert("右");
		},
		"enter":function(e){
			alert("回车");
		},
		scope:el
	}
	var nv = new Ext.KeyNav(el,config);
	function active(){
		nv.enable();
	}
	function stop(){
		nv.disable();
	}
		
	
})
Ext.onReady(function(){
	var _p1 = new Ext.Panel({
		title:'isEmpty示例',
		frame:true,
		renderTo:Ext.getBody(),
		width:300,
		height:200,
		id:'panel1',
		html:"<div id='div1' style='width:150px;height:100px;background-color:green;padding:5px,font-size:8px'></div>"
	}); 
	var _comp = Ext.getCmp("panel1");
	var _dom = Ext.getDom("div1").innerHTML;
	Ext.Msg.alert("提示","Ext.isEmpty()的结果是"+Ext.isEmpty(_p1)+"<br/>"+
	"参数设置成变量且是通过Ext.getCmp进行获得的"+Ext.isEmpty(_comp)+
	"<br/>参数设置成变量且是通过Ext.getDom.innerHTML进行获得的"+Ext.isEmpty(_dom,false)
	)//参数的类型是组件类型的
	
	//因此可以得知，这个isEmpty的参数可以是任何类型的值
})
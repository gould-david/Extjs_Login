Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'Query查询',
		renderTo:Ext.getBody(),
		width:500,
		html:"<div id='div1' property1='pro1' style='height:200px'>" +
				"<div id='01' property1='pro1'></div><div id='02' class='cls02'></div></div>"
	});
	
	var e1 = Ext.query("#div1");
	var target = Ext.query("div[property1=pro1]");
	var target2 = Ext.query(".cls02");
	if(e1.length > 0 && target.length > 0){
		Ext.Msg.alert('提示',"ID为DIV1的数量为"+e1.length+
		"<br/>Property1为pro1的数量是"+target.length+"<br/>"+
		"div下面ID为ID2的数量是"+target2.length
		);
	}
})
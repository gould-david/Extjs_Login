Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title:'htmlDecode将转义字符转换成HTML标准字符',
		renderTo:Ext.getBody(),
		frame:true,
		width:300,
		height:150,
		html:"<div id='div1' style='background-color:green'>点击触发事件</div>"
	});
	
	var e1 = Ext.select(["div1"]);
	
	e1.on("click",ALERT);
	
	function ALERT(){
		/*Ext.Msg.alert('提示',"<table width='120px' height='80px' border='2px' cellpadding='4px' cellspacing='2px'>" +
				"<tr><td>简单的table表格</td></tr>" +
				"<tr><td>简单的table表格</td></tr>" +
				"</table>")*///其实alert自动会将转义字符变成html标准字符
				
		/*Ext.Msg.alert('提示',Ext.htmlDecode("<table width='120px' height='80px' border='2px' cellpadding='4px' cellspacing='2px'>" +
				"<tr><td>简单的table表格</td></tr>" +
				"<tr><td>简单的table表格</td></tr>" +
				"</table>"));*/
				
				
		//下面这个方法是避免转义字符被转换成html标准字符
		Ext.Msg.alert('提示',Ext.htmlEncode("<table width='120px' height='80px' border='2px' cellpadding='4px' cellspacing='2px'>" +
				"<tr><td>简单的table表格</td></tr>" +
				"<tr><td>简单的table表格</td></tr>" +
				"</table>"));	
	}
	
})
Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.core.DomHelper.createTemplate',
		width:600,
		height:400,
		renderTo:Ext.getBody(),
		html:"<div id='div1' style='background-color:yellow;height:200px;width:350px'>DIV1内容</div>"
	});
	
	var temp = Ext.core.DomHelper.createTemplate("<br/><div id='{id}'>" +
				"<span class='{cls}'>" +"--{name:trim}-- <br/> {value:ellipsis(10)}"+
				"<br/>Ext标准模板" +
				"</span>" +
			"</div>");
	//注意：这里name后面的trim作用是：将前后的空格去除；value后面的ellipsis(10)作用是：内容的长度超过10时，以省略号显示剩余部分的文字
	var _ptemp = {
		id:'div1',
		cls:'cls_template',
		name:' 空  格 ',
		value:'超过规定的字符长度，自动将超过的文字以...进行显示'
	}
	temp.append(Ext.get("div1"),_ptemp,true);
	
})
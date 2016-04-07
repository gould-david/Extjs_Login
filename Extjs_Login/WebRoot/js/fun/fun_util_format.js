Ext.onReady(function(){
	var str1 = "&lt;table width='300px' cellspacing=1 border=1 cellpadding=1<tr><td>表格内容</td></tr></table>";
	var str2 = "abc";
	var str3 = 'AbC';
	var date = new Date();
	var num = 12345;
	var num2 = 1.235678;
	
	Ext.Msg.alert("提示","原str1是:"+str1+"<br/>"+
		"现str1是经过ellipsis:"+Ext.util.Format.ellipsis(str1,15)+"<br/>"+"<br/>"+
		"原str2是:"+str2+"<br/>"+
		"现str2是经过capitalize处理"+Ext.util.Format.capitalize(str2)+"<br/>"+"<br/>"+
		"原date是:"+date+"<br/>"+
		"现date是经过date处理:"+Ext.util.Format.date(date,"M-d-Y")+"<br/>"+"<br/>"+
		"原str1是:"+str1+"<br/>"+
		"现str1是经过HTMLDecode处理:"+Ext.util.Format.htmlDecode(str1)+"<br/>"+"<br/>"+//encode含有解码的含义，即将解析成计算机语言，那么decode则有将计算机语言转换成实体的作用
		"原str3是:"+str3+"<br/>"+
		"现str3是经过lowercase处理:"+Ext.util.Format.lowercase(str3)+"<br/>"+"<br/>"+
		"原num是:"+num+"<br/>"+
		"现num是经过number处理:"+Ext.util.Format.number(num,"100.00")+"<br/>"+"<br/>"+
		"原num2是:"+num2+"<br/>"+
		"现num2是经过round处理:"+Ext.util.Format.round(num2,3)+"<br/>"
	
	)
	
})